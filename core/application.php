<?php

class Application {

	/*
	* Holds request object
	*/
	public $request;
	public $response;
	/**
	* Class to be instantiated
	**/
	public $class;
	/**
	* Method of the $class to be invoked
	**/
	public $class_method;
	/**
	* Arguments for passing to method
	**/
	public $args = array();


	/**
	* virtual functions to be overriden by child classes
	**/
	public function before_request() { }
	public function after_request() { }
	public function app_start() { }

	function __construct() {
	}

	public function init() {
		$this->app_start();
		$this->parse_request();
		if(!class_exists($this->class)) {
			$this->response = new Response(Response::NOTFOUND, 'No resource found');
			$this->response->output();
			return;
		}
		$this->generate_response();
		$this->response->output();
		$this->after_request();
	}

	private function parse_request() {
		$this->before_request();
		$this->request = new Request();
		$this->response = new Response();
		$this->extract_class();
	}

	private function generate_response() {
		try {
			$result = $this->execute_method();

			if($this->is_model($result)) {
				$data = $this->get_serialized_response($result);
			} else if($this->is_model_array($result)){
				$data = $this->get_serialized_response_for_array($result);
			} else {
				$data = json_encode($result);
			}

			$this->response = new Response(Response::OK, $data);

		} catch(ResourceNotFound $ex) {
			$this->response = new Response(Response::NOTFOUND, 'Resource not found! ' .$ex->getMessage());
		} catch(Exception $e) {
			var_dump($e);
			$this->response = new Response(Response::INTERNALSERVERERROR, 'Oops! something went wrong!');
		}
	}

	private function get_serialized_response_for_array($result) {
		if(RESPONSE_TYPE == 'json') {
			$arr = "[";
			foreach ($result as $key => $value) {
				$arr .= $value->to_json();
			}
			$arr .= "]";
		} else {
			$arr = "<response>";
			foreach ($result as $key => $value) {
				$arr .= $value->to_xml();
			}
			$arr .= "</response>";
		}
		return $arr;
	}

	private function execute_method() {
		$obj = new $this->class;
		if($obj instanceof BaseController) {
			$obj->set_data($this->request->data);
			$obj->request = $this->request;
		}
		$method = $this->class_method;
		return call_user_func_array(array($obj , $method), $this->args);
	}

	private function get_serialized_response($result) {
		if(RESPONSE_TYPE == 'json')
			return $result->to_json(array());
		else
			return $result->to_xml();
	}

	private function is_model($result) {
		return gettype($result) == 'object' && $result instanceof ActiveRecord\Model;
	}

	private function is_model_array($result) {
		return gettype($result) == 'array' 
					&& count($result) != 0 
					&& $result[0] instanceof ActiveRecord\Model;
	}

	private function extract_class() {
		$split_uri = array_filter(explode("/" , str_replace(strtolower(BASE_URL), "", strtolower($this->request->uri))));
		if(count($split_uri) == 0) {
			$this->class = DEFAULT_CONTROLLER;
			$this->class_method = 'index_' . strtolower($this->request->method);
			return;
		}
		//first argument always has to be class
		$this->class = $this->controlify_class_name($split_uri[1]);
		$this->class = $this->class == 'Controller' || !class_exists($this->class) ? DEFAULT_CONTROLLER : $this->class;
		
		//if class and method both exists
		$obj = new $this->class;
		$this->class_method = $this->extract_method($split_uri, $obj);
		$this->args = $this->extract_arguments($split_uri);
	}

	private function extract_method($split_uri, $obj) {
		$method = $this->get_default_method();
		for ($i=1; $i <= count($split_uri) ; $i++) { 
			if(method_exists($obj, $this->get_decorated_method_name($split_uri[$i]))
				&& $split_uri[$i] != $this->class) {
				$method = $this->get_decorated_method_name($split_uri[$i]);
			}
		}
		return $method;
	}

	private function extract_arguments($split_uri) {
		$args = array();
		foreach ($split_uri as $value) {
			if($this->get_decorated_method_name($value) != $this->class_method 
				&& $this->controlify_class_name($value) != $this->class) {
				array_push($args, $value);
			}
		}
		return $args;
	}

	private function get_default_method() {
		return 'index_' . strtolower($this->request->method);
	}

	private function get_decorated_method_name($name) {
		return strtolower($name . '_' . $this->request->method);
	}

	private function controlify_class_name($name) {
		$n = strtolower($name);
		$n = ucfirst($n);
		return $n  . 'Controller';
	}
}

?>