<?php

class BaseController {
	
	private $put_data;
	public $request;

	public function set_data($data) {
		$this->put_data = $data;
	}

	public function get_data() {
		$data = array();
		switch ($this->request->method) {
			case 'GET':
				$data = $_GET;	
				break;
			case 'POST':
				$data = $_POST;	
				break;
			case 'DELETE':
			case 'PUT':
				$data = $this->put_data;
				break;
		}
		return $data;
	}

	public function __construct() {
	}

	public function get($key, $optional = FALSE) {
		$result = $this->value($_GET, $key);
		return $result || $optional ? $result : $this->not_cool($key);
	}

	public function post($key, $optional = FALSE) {
		$result = $this->value($_POST, $key);
		return $result || $optional ? $result : $this->not_cool($key);
	}

	public function put($key, $optional = FALSE) {
		$result = $this->value($this->put_data, $key);
		return $result != NULL || $optional ? $result : $this->not_cool($key);	
	}

	public function delete($key, $optional = FALSE) {
		return $this->put($key, $optional);
	}

	private function value($arr, $key) {
    	return isset($arr[$key]) && !empty($arr[$key]) ? $arr[$key] : NULL;
	}

	private function not_cool($key) {
		throw new BadRequest('Parameters not valid, unable to find key ' . $key);
	}
}

?>