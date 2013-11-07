<?php

class SprintController extends BaseController {
	
	public function index_get($sprint_id) {
		return "No no no!";
	}

	public function index_post($project_id = NULL) {
		ProjectController::validate_access($project_id);
		$sprint = new Sprint();
		$sprint = deserialize($this->get_data(), $sprint);
		$sprint->project_id = $project_id;
		$sprint->created_by = Utopia::$user->id;
		$sprint->save();
		return $sprint;
	}

	public function index_put($sprint_id) {
		self::validate_access($sprint_id);
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

		$sprint->delete();
		return "Sprint successfuly deleted";
	}

	public function workitems_get($sprint_id) {
		self::validate_access($sprint_id);
		$options['conditions'] = array('planned_for = ?', $sprint_id);
		return Workitem::find('all', $options);
	}

	public static function validate_access($sprint_id) {
		$project_id = Sprint::find($sprint_id)->project->id;
		ProjectController::validate_access($project_id);
	}
}