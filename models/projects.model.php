<?php
/**
 * Standard project model
 */
class Project extends ActiveRecord\Model {
	/**
	 * table name
	 * @var string
	 */
	public static $table_name = 'tbl_projects';

	/**
	 * associations
	 * @var array
	 */
	static $belongs_to = array(
      	array('user', 'select' => 'id, user_name, display_name', 'class_name' => 'User')
    );

	/**
	 * associations
	 * @var array
	 */
    static $has_many = array(
	    array('workitems', 'class_name' => 'Workitem'),
	    array('sprints', 'class_name' => 'Sprint'),
	    array('mappings', 'class_name' => 'ProjectUser'),
	    array('members', 'class_name' => 'User', 'through' => 'mappings'),
    );

    /**
     * Returns active workitems for a user in the given project
     * @return array::Workitem
     */
    public function in_progress_workitems() {
    	$complex_sql_query = "SELECT * FROM `tbl_workitems` 
								WHERE tbl_workitems.project_id = ? AND tbl_workitems.assigned_to = ?
								AND tbl_workitems.state in 
								(SELECT id FROM tbl_workitem_states WHERE tbl_workitem_states.is_final = 0)";
		
		return self::find_by_sql($complex_sql_query, array($this->id, Utopia::$user->id));
	}

	/**
	 * Returns distinct states in a project
	 * @return array::WorkitemState
	 */
	public function get_states() {
		$states = Workitem::find_by_sql("SELECT DISTINCT state FROM `tbl_workitems` 
			WHERE tbl_workitems.project_id = ?", array($this->id));
		$ids = array_map(function($value) { return $value->state; }, $states);
		$options['conditions'] = array("id in (?)", $ids);
		return WorkitemState::find('all', $options);
	}

	/**
	 * Returns distinct workitem types 
	 * @return array::WorkitemType
	 */
	public function get_types() {
		$types = self::find_by_sql("SELECT DISTINCT type FROM `tbl_workitems` 
			WHERE tbl_workitems.project_id = ?", array($this->id));
		$ids = array_map(function($value) { return $value->type; }, $types);
		$options['conditions'] = array("id in (?)", $ids);
		return WorkitemType::find('all', $options);
	}
}

/**
 * Supplementary class for mapping projects and users
 */
class ProjectUser extends ActiveRecord\Model {
	static $table_name = 'tbl_project_users';

	static $belongs_to = array(
      array('user', 'select' => 'id, user_name, display_name', 'class_name' => 'User', 'foreign_key' => 'user_id'),
      array('project', 'class_name' => 'Project')
    );
}