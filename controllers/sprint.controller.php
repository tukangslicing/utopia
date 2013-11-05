<?php

class SprintController extends BaseController {
	
	public function index_get($sprint_id) {
		return "No no no!";
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