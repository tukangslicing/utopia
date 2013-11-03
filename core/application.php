<?php

class Application {

	/**
	 * Holds the request object
	 * @var Response
	 */
	public $request;
	
	/**
	 * Holds the response object
	 * @var Request
	 */
	public $response;
	
	/**
	 * Class name of the controller to be invoked
	 * @var string
	 */
	public $class;

	/**
	* Method of the $class to be invoked
	* @var string
	**/
	public $class_method;
	
	/**
	 * Components of URI to be passed to the class_method
	 * @var array
	 */
	public $args = array();


	/**
	 * These will be called by child classes
	 * @return [type]
	 */
	public function before_request() { }
	public function after_request() { }

	function __construct() {
	}

	/**
	 * Responsible for handling entire lifecycle of request
	 * @return [type]
	 */
	public function init() {
		$this->parse_request();
		if(!class_exists($this->class)) {
			$this->response = new Response(Response::NOTFOUND, 'No resource found');
			$this->response->output();
			return;
		}
		try {
			$this->after_request();
		} catch(Exception $e) {
			$this->end_reponse($e);
			return;
		}
		$this->generate_response();
		$this->response->output();
	}

	/**
	 * Create a valid request object out of HTTP header
	 * @return [type]
	 */
	private function parse_request() {
		try {
			$this->before_request();
		} catch(Exception $e) {
			$this->end_reponse($e);
			return;
		}
		$this->request = new Request();
		$this->response = new Response();
		$this->extract_class();
	}

	/**
	 * Abruptly end the response if no controller class is found
	 * @param  [type] $ex
	 * @return [type]
	 */
	private function end_reponse($ex) {
		$this->response = new Response(Response::INTERNALSERVERERROR, $ex->getMessage());
		$this->response->output();
	}

	/**
	 * Execute the method extracted in extract_class and return the response
	 * @return [type]
	 */
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
			$this->response = new Response(Response::INTERNALSERVERERROR, 'Oops! something went wrong! ' . $e->getMessage());
		}

		if(RESPONSE_TYPE == 'json') {
			$this->response->contentType = 'application/json';
		} else {
			$this->response->contentType = 'application/xml';
		}
	}

	/**
	 * Convert phpactiverecord array to json/xml based on config
	 * @param  [type] $result
	 * @return [type]
	 */
	private function get_serialized_response_for_array($result) {
		if(RESPONSE_TYPE == 'json') {
			$arr = "[";
			$dataArr = array();
			foreach ($result as $key => $value) {
				array_push($dataArr, $value->to_json());
			}
			$arr .= implode(",", $dataArr) . "]";
		} else {
			$arr = "<response>";
			foreach ($result as $key => $value) {
				$arr .= $value->to_xml();
			}
			$arr .= "</response>";
		}
		return $arr;
	}

	/**
	 * Call the actual method
	 * @return [type]
	 */
	private function execute_method() {
		$obj = new $this->class;
		if($obj instanceof BaseController) {
			$obj->set_data($this->request->data);
			$obj->request = $this->request;
		}
		$method = $this->class_method;
		return call_user_func_array(array($obj , $method), $this->args);
	}

	/**
	 * Convert a single object of phpactiverecord to xml/json
	 * @param  [type] $result
	 * @return [type]
	 */
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
					&& array_shift($result) instanceof ActiveRecord\Model;
	}

	/**
	 * extract class name from URI for $class
	 * @return [type]
	 */
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

	/**
	 * Extract method name from URI for $class_method
	 * @param  [type] $split_uri
	 * @param  [type] $obj
	 * @return [type]
	 */
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

	/**
	 * Extract arugments to be passed to $class_method, 
	 * all the components other than $class and $class_method will be considered as arugments
	 * @param  [type] $split_uri
	 * @return [type]
	 */
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