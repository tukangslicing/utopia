<?php

class ImpedimentFilter extends FilterBase {
	public $users;
	public $query;
	public $is_resolved;

	public function __construct() {
		$users = "*";
		$is_resolved = "0";
	}

	public function build_sql() {
		$sql = array();
		$args = array();

		if(!is_empty($this->users)) {		
			array_push($sql, 'created_by in (?)');
			array_push($args, $this->users);
		}

		if(!is_empty($this->query)) {
			array_push($sql, 'title LIKE ?');
			array_push($args, '%'.$this->query.'%');
		}

		if(!is_empty($this->is_resolved) && $this->is_resolved != "*") {
			array_push($sql, 'is_resolved = ?');
			array_push($args, $this->is_resolved);
		} 
		$this->sql = implode($sql, ' AND ');
		$this->args = $args;
	}
}