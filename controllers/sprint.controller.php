<?php

class SprintController extends BaseController {
	
	public function index_get($sprint_id) {
		return "No no no!";
	}

	/**
	 * Creates a new sprint
	 * @param  [type] $project_id
	 * @return [type]
	 */
	public function index_post($project_id = NULL) {
		ProjectController::validate_access($project_id);
		$sprint = new Sprint();
		$sprint = deserialize($this->get_data(), $sprint);
		$sprint->project_id = $project_id;
		$sprint->created_by = Utopia::$user->id;
		$sprint->save();
		return $sprint;
	}

	/**
	 * Updates a sprint
	 * @param  [type] $sprint_id
	 * @return [type]
	 */
	public function index_put($sprint_id) {
		self::validate_access($sprint_id);
		$sprint = Sprint::find($sprint_id);
		$sprint = deserialize($this->get_data(), $sprint);
		$sprint->save();
		return $sprint;
	}

	/**
	 * Must pass an alternative sprint id to move the existing workitems
	 */
	public function index_delete($sprint_id, $alternative_sprint_id = NULL) {
		self::validate_access($sprint_id);

		$set = array('planned_for' => $alternative_sprint_id);
		$where = array('planned_for' => $sprint_id);
		Workitem::table()->update($set, $where);
		$sprint = Sprint::find($sprint_id);
		$sprint->delete();
		return "Sprint successfuly deleted";
	}

	/**
	 * Returns workitems from requested sprint
	 * @param  [type] $sprint_id
	 * @return [type]
	 */
	public function workitems_get($sprint_id) {
		self::validate_access($sprint_id);
		$options['conditions'] = array('planned_for = ?', $sprint_id);
		return Workitem::find('all', $options);
	}

	/**
	 * [validate_access description]
	 * @param  [type] $sprint_id
	 * @return [type]
	 */
	public static function validate_access($sprint_id) {
		$project_id = Sprint::find($sprint_id)->project->id;
		ProjectController::validate_access($project_id);
	}
}