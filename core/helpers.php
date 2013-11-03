<?php

/**
 * Logging method for only-REST
 * TODO
 * @param  [type] $message
 * @param  string $level
 * @return [type]
 */
function log_rmr($message, $level = 'error') {

}

/**
 * Helper method for generating DateTime.Now
 * @param  string $add_days - if given it'll add the days to current date!
 * @return date
 */
function now($add_days = '+0') {
	return date("Y-m-d H:i:s", strtotime($add_days . ' days'));
}

/**
 * Convert array into ActiveRecord model, still under construction use with caution!
 * @param  [type] $arr
 * @param  [type] $obj
 * @return [type]
 */
function deserialize($arr, $obj) {
	foreach ($arr as $key => $value) {
		$obj->$key = $value;
	}
	return $obj;
}

/**
 * Set of exceptions to ease your pain of handling responses!
 */
class BadRequest extends Exception { }
class ResourceNotFound extends Exception { }
class AuthRequired extends Exception { }
class InvalidToken extends Exception { }

?>