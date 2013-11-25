<?php

class Impediments extends ActiveRecord\Model {
	static $table_name = 'tbl_impediments';

	static $belongs_to = array(
      array('project', 'class_name' => 'Project')
    );

	static $has_many =  array(
		array('comments', 'class_name' => 'ImpedimentComments', 'foreign_key' => 'impediment_id')
	);

	static $has_one = array(
      array('user', 'class_name' => 'User', 'foreign_key' => 'created_by'),
    );

    public static function find_by_filter($project_id, $filter) {
		$sql = $filter->get_sql();
		$filterArgs = $filter->get_args();
		array_unshift($filterArgs, $project_id);

		if(!is_empty($sql)) {
			$sql = ' AND ' . $sql;
		} 

		$query = 'SELECT * FROM tbl_impediments WHERE tbl_impediments.project_id = ? ' . $sql;
    	return self::find_by_sql($query, $filterArgs);
    }
}

class ImpedimentComments extends ActiveRecord\Model {
	static $table_name = 'tbl_impediment_comments';
	
	static $belongs_to = array(
      array('impediment', 'class_name' => 'Impediments', 'foreign_key' => 'impediment_id')
    );

	static $has_one = array(
      array('user', 'class_name' => 'User', 'foreign_key' => 'created_by'),
    );		
}