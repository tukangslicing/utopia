<?php

function log_rmr($message, $level = 'error') {

}

function now($add_days = '+0') {
	return date("Y-m-d H:i:s", strtotime($add_days . ' days'));
}

function deserialize($arr, $obj) {
	foreach ($arr as $key => $value) {
		$obj->$key = $value;
	}
	return $obj;
}


class BadRequest extends Exception { }
class ResourceNotFound extends Exception { }
class AuthRequired extends Exception { }
class InvalidToken extends Exception { }

?>