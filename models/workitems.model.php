<?php

class Workitem extends ActiveRecord\Model {
	static $table_name = "tbl_workitems";

	static $belongs_to = array(
      array('user', 'select' => 'id, user_name, display_name', 'class_name' => 'User', 'foreign_key' => 'assigned_to'),
      array('creator', 'select' => 'id, user_name, display_name', 'class_name' => 'User', 'foreign_key' => 'created_by'),
      array('project', 'class_name' => 'Project')
    );

    static $has_one =  array(
      array('state', 'class_name' => 'WorkitemState', 'foreign_key' => 'state'),
      array('type', 'class_name' => 'WorkitemType', 'foreign_key' => 'type')
    );

    static $has_many = array(
      array('tasks', 'class_name' => 'WorkitemTask')
    );
}