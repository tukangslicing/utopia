<?php

class Sprint extends ActiveRecord\Model {
	static $table_name = 'tbl_milestones';

	static $belongs_to = array(
      array('user', 'select' => 'id, user_name, display_name', 'class_name' => 'User', 'foreign_key' => 'created_by'),
      array('project', 'class_name' => 'Project')
    );
}
