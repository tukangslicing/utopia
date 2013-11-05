<?php

class TimelineController extends BaseController {
	
	public function logs_get($project_id) {
		ProjectController::validate_access($project_id);
		return WorkitemLog::get_log_by_project($project_id, $this->get_filter('logs'));
	}

	public function comments_get($project_id) {
		ProjectController::validate_access($project_id);
		return WorkitemComment::get_log_by_project($project_id, $this->get_filter('comments'));
	}

	public function tasks_get($project_id) {
		ProjectController::validate_access($project_id);
		return WorkitemTask::get_log_by_project($project_id, $this->get_filter('tasks'));
	}

	private function get_filter($table) {
		$filter = new TimelineFilter();
		$filter = deserialize($this->get_data(), $filter);
		$filter->build_sql($table);
		$filter->get_sql();
		$filter->get_args();
		return $filter;
	}
}