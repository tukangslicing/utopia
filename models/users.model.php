<?php

class User extends ActiveRecord\Model {
	public static $table_name = 'tbl_users';

	static $has_many = array(
      array('projects', 'class_name' => 'Project'),
    );
}
