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
		array('tasks', 'class_name' => 'WorkitemTask'),
		array('comments', 'class_name' => 'WorkitemComment'),
		array('logs', 'class_name' => 'WorkitemLog')
		);

	/**
	 * insert the entry in log for updating the workitem, 
	 * will be used in timeline
 	 * @param  array $data  [put data from the request]
	 * @return [type]       [description]
	 */
	public function update_log($data) {
		$array = $this->to_array();
		$result = array();
		foreach ($data as $key => $data_val) {
			if($array[$key] != $data_val && $key != 'last_updated')	{
				$log = new WorkitemLog();
				$log->workitem_id = $this->id;
				$log->user_id = Utopia::$user->id;
				$log->action = $key;
				$log->old_value = $array[$key];
				$log->new_value = $data_val;
				$log->timestamp = now();
				$log->save();
			}
		}
	}
}