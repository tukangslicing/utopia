<?php

class WorkitemController extends BaseController {

	/**
	 * Get only one Workitem based on ID
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function index_get($id) {

	}

	/**
	 * Create a new workitem 
	 * TODO : use the deserialize function
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function index_post($id = NULL) {

	}

	/**
	 * Update an existing workitem
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function index_put($id = NULL) {
		$id = $id == NULL ? $this->put('id') : $id;
		self::validate_access($id);
		$workitem = deserialize($this->get_data(), Workitem::find($id));
		$workitem->save();
		return $workitem;
	}

	/**
	 * Delete the workitem, 
	 * TODO : check for restangular's delete method
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function index_delete($id)	{

	}

	/**
	 * Gets all tasks associated with the workitem, if id is given gets only one task
	 * @param  [type] $workitem_id [description]
	 * @param  [type] $id          [description]
	 * @return [type]              [description]
	 */
	public function tasks_get($workitem_id = NULL, $id = NULL) {
		self::validate_access($workitem_id);
		if($id) {

		} else {
			return Workitem::find($workitem_id)->tasks;
		}
	}

	/**
	 * Will create a new task 
	 * @param  [type] $workitem_id [description]
	 * @return [type]              [description]
	 */
	public function tasks_post($workitem_id) {
		self::validate_access($workitem_id);
		$task = new WorkitemTask();
		$task = deserialize($this->get_data(), $task);
		$task->workitem_id = $workitem_id;
		$task->save();
		return $task;
	}

	/**
	 * Update an existing task
	 * @param  [type] $workitem_id [description]
	 * @return [type]              [description]
	 */
	public function tasks_put($id = NULL) {
		$id = $id == NULL ? $this->put('workitem_id') : $id;
		self::validate_access($id);
		$task = deserialize($this->get_data(), WorkitemTask::find($this->put('id')));
		$task->save();
		return $task;
	}

	/**
	 * Remove an task 
	 * TODO : check for restangulars delete request
	 * @param  [type] $workitem_id [description]
	 * @return [type]              [description]
	 */
	public function tasks_delete($id = NULL) {
		$task = WorkitemTask::find($id);
		self::validate_access($task->workitem_id);
		$task->delete();
		return $task;
	}
	

	public function comments_get($workitem_id) {
		self::validate_access($workitem_id);
		return Workitem::find($workitem_id)->comments;
	}

	public function comments_post($workitem_id) {
		
	}

	public function comments_put($workitem_id) {
		
	}

	public function comments_delete($workitem_id) {
		
	}

	/**
	 * Validates access to the workitem based on whether it belongs to the user project or not
	 * @param  [type] $workitem_id [description]
	 * @return [type]              [description]
	 */
	public static function validate_access($workitem_id) {
		$workitem = Workitem::find($workitem_id);
		$result = array_filter(Utopia::$user->projects, function($project) use($workitem_id, $workitem){
			return $project->id == $workitem->project_id;
		});
		if(count($result) > 0) { } else {
			throw new Exception(NOT_ALLOWED);
			
		}
	}	
}