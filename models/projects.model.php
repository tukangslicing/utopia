<?php

class Project extends ActiveRecord\Model {
	public static $table_name = 'tbl_projects';

	static $belongs_to = array(
      	array('user', 'select' => 'id, user_name, display_name', 'class_name' => 'User')
    );

    static $has_many = array(
	    array('workitems', 'class_name' => 'Workitem'),
	    array('sprints', 'class_name' => 'Sprint'),
	    array('mappings', 'class_name' => 'ProjectUser'),
	    array('members', 'class_name' => 'User', 'through' => 'mappings'),
    );

    public function in_progress_workitems() {
    	$complex_sql_query = "SELECT * FROM `tbl_workitems` 
								WHERE tbl_workitems.project_id = ? AND tbl_workitems.assigned_to = ?
								AND tbl_workitems.state in 
								(SELECT id FROM tbl_workitem_states WHERE tbl_workitem_states.is_final = 0)";
		
		return self::find_by_sql($complex_sql_query, array($this->id, Utopia::$user->id));
	}

	//Gets distinct workitem states
	public function get_states() {
		$states = Workitem::find_by_sql("SELECT DISTINCT state FROM `tbl_workitems` 
			WHERE tbl_workitems.project_id = ?", array($this->id));
		$ids = array_map(function($value) { return $value->state; }, $states);
		$options['conditions'] = array("id in (?)", $ids);
		return WorkitemState::find('all', $options);
	}

	//Gets distinct workitem types
	public function get_types() {
		$types = self::find_by_sql("SELECT DISTINCT type FROM `tbl_workitems` 
			WHERE tbl_workitems.project_id = ?", array($this->id));
		$ids = array_map(function($value) { return $value->type; }, $types);
		$options['conditions'] = array("id in (?)", $ids);
		return WorkitemType::find('all', $options);
	}
}

class ProjectUser extends ActiveRecord\Model {
	
	static $table_name = 'tbl_project_users';

	static $belongs_to = array(
      array('user', 'select' => 'id, user_name, display_name', 'class_name' => 'User', 'foreign_key' => 'user_id'),
      array('project', 'class_name' => 'Project')
    );
}