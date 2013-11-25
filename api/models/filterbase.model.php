<?php

class FilterBase {
	public $sql = array();
	public $args = array();

	public function get_sql() {
		return $this->sql;
	}

	public function get_args() {
		return $this->args;
	}
}