<?php

class Project extends ActiveRecord\Model {
	public static $table_name = 'tbl_projects';

	static $belongs_to = array(
      array('user', 'select' => 'id, user_name, display_name', 'class_name' => 'User')
    );
}