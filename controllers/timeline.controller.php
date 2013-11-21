<?php

class TimelineController extends BaseController {
	
	/**
	 * Returns workitem logs
	 * @param  [type] $project_id
	 * @return [type]
	 */
	public function logs_get($project_id) {
		ProjectController::validate_access($project_id);
		return WorkitemLog::get_log_by_project($project_id, $this->get_filter('logs'));
	}

	/**
	 * Returns comments made by users
	 * @param  [type] $project_id
	 * @return [type]
	 */
	public function comments_get($project_id) {
		ProjectController::validate_access($project_id);
		return WorkitemComment::get_log_by_project($project_id, $this->get_filter('comments'));
	}

	/**
	 * Returns completed tasks
	 * @param  [type] $project_id
	 * @return [type]
	 */
	public function tasks_get($project_id) {
		ProjectController::validate_access($project_id);
		return WorkitemTask::get_log_by_project($project_id, $this->get_filter('tasks'));
	}

	/**
	 * Creator of TimelineFilter object, 
	 * deserialize object if provided else will use default
	 * @param  [type] $table
	 * @return [type]
	 */
	private function get_filter($table) {
		$filter = new TimelineFilter();
		$filter = deserialize($this->get_data(), $filter);
		$filter->build_sql($table);
		if(!is_empty($this->get('from', true))) {
			$filter->from = strtotime($this->get('from'));
		}
		if(!is_empty($this->get('to', true))) {
			$filter->to = strtotime($this->get('to'));
		}
		$filter->get_sql();
		$filter->get_args();
		return $filter;
	}
}