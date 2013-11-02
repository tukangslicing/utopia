<?php

class WorkitemState extends ActiveRecord\Model {
	static $table_name = "tbl_workitem_states";
}

class WorkitemType extends ActiveRecord\Model {
	static $table_name = "tbl_workitem_types";
}

class WorkitemTask extends ActiveRecord\Model {
	static $table_name = "tbl_workitem_tasks";
	
	static $belongs_to = array(
      array('workitem', 'class_name' => 'Workitem'),
      array('user', 'class_name' => 'User')
    );
}

class WorkitemLog extends ActiveRecord\Model {
	static $table_name = "tbl_workitem_log";
	
	static $belongs_to = array(
      array('workitem', 'class_name' => 'Workitem'),
      array('user', 'class_name' => 'User')
    );
}