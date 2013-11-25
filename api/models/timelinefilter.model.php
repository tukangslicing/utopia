<?php

class TimelineFilter {
	public $users;
	public $from;
	public $to;
	public $workitem_id;

	public $sql;
	public $args;

	public function __construct() {
		$this->users = '';
		$this->from = now("-3");
		$this->to = now();
		$this->workitem_id = '';
	}

	public function build_sql($table) {
		$sql = array();
		$args = array();
		if(!is_empty($this->users)) {
			array_push($sql, ' user_id in (?) ');
			array_push($args, $this->users);
		}
		if(!is_empty($this->workitem_id)) {
			array_push($sql, ' workitem_id in (?) ');
			array_push($args, $this->workitem_id);
		}
		$timestamp = '';
		switch ($table) {
			case 'logs':
				$timestamp = ' timestamp ';
				break;
			case 'comments':
				$timestamp = ' created_at ';
				break;
			case 'tasks':
				$timestamp = ' done_date ';
				break;
		}
		array_push($sql, $timestamp . ' BETWEEN ? AND ? ');
		array_push($args, date($this->from), date($this->to));

		$this->sql = implode($sql, 'AND');
		$this->args = $args;
	}

	public function get_sql() {
		return $this->sql;
	}

	public function get_args() {
		return $this->args;
	}
}