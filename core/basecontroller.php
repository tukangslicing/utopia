<?php

class BaseController {
	
	public $user_id;

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

	private function value($arr, $key) {
    	return isset($arr[$key]) && !empty($arr[$key]) ? $arr[$key] : NULL;
	}

	private function not_cool($key) {
		throw new BadRequest('Parameters not valid, unable to find key ' . $key);
	}
}

?>