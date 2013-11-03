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
	public function index_post($id) {

	}

	/**
	 * Update an existing workitem
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function index_put($id) {

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
	}

	/**
	 * Update an existing task
	 * @param  [type] $workitem_id [description]
	 * @return [type]              [description]
	 */
	public function tasks_put($workitem_id) {
	}

	/**
	 * Remove an task 
	 * TODO : check for restangulars delete request
	 * @param  [type] $workitem_id [description]
	 * @return [type]              [description]
	 */
	public function tasks_delete($workitem_id) {
	}
	
	/**
	 * Validates access to the workitem based on whether it belongs to the user project or not
	 * @param  [type] $workitem_id [description]
	 * @return [type]              [description]
	 */
	public static function validate_access($workitem_id) {
		$workitem = Workitem::find($workitem_id);
		$result = array_filter(Utopia::$user->projects, function($project) use($id){
			return $project->id == $workitem->project_id;
		});
		if(count($result) > 0) { } else {
			throw new Exception(NOT_ALLOWED);
			
		}
	}	
}