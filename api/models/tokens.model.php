<?php

class Token extends ActiveRecord\Model {
	public static $table_name = 'tbl_api_keys';

	static $belongs_to = array(
      array('user', 'select' => 'id, user_name, display_name', 'class_name' => 'User')
    );
}