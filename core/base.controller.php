<?php

/**
 * Provides utility method for accessing http data
 */
class BaseController {
	
	/**
	 * storing data came from php://input
	 * @var array
	 */
	private $put_data;

	/**
	 * Request object from appliaction
	 * @var Request
	 */
	public $request;

	/**
	 * Used by Application
	 * @param [type] $data
	 */
	public function set_data($data) {
		$this->put_data = $data;
	}

	/**
	 * Return entire data array based on method
	 * @return [type]
	 */
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

	/**
	 * Returns a value from GET array
	 * @param  [type]  $key
	 * @param  boolean $optional
	 * @return if present, value else exception
	 */
	public function get($key, $optional = FALSE) {
		$result = $this->value($_GET, $key);
		return $result || $optional ? $result : $this->not_cool($key);
	}

	/**
	 * Returns a value from POST array
	 * @param  [type]  $key
	 * @param  boolean $optional
	 * @return if present, value else exception
	 */
	public function post($key, $optional = FALSE) {
		$result = $this->value($_POST, $key);
		return $result || $optional ? $result : $this->not_cool($key);
	}


	/**
	 * Returns a value from put_data array
	 * @param  [type]  $key
	 * @param  boolean $optional
	 * @return if present, value else exception
	 */
	public function put($key, $optional = FALSE) {
		$result = $this->value($this->put_data, $key);
		return $result != NULL || $optional ? $result : $this->not_cool($key);	
	}

	/**
	 * Turns out, delete requests also send data using php://input, put_data it is !
	 * Returns a value from put_data array
	 * @param  [type]  $key
	 * @param  boolean $optional
	 * @return if present, value else exception
	 */
	public function delete($key, $optional = FALSE) {
		return $this->put($key, $optional);
	}

	private function value($arr, $key) {
    	return isset($arr[$key]) && !empty($arr[$key]) ? $arr[$key] : NULL;
	}

	/**
	 * if non-optional param is not found, throw an exception,
	 * cause messing with request params is NOT COOL!
	 * @param  [type] $key
	 * @return [type]
	 */
	private function not_cool($key) {
		throw new BadRequest('Parameters not valid, unable to find key ' . $key);
	}
}

?>