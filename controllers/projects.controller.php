<?php

class ProjectController extends BaseController {

	/**
	 * Base method for project controller
	 * @param  project_id $id
	 * @return if $id is null - Array of user projects, project give by id
	 */
	public function index_get($id = NULL) {
		if($id) {
			self::validate_project($id);
			return Project::find($id);
		}
		return Utopia::$user->projects;
	}
	
	/**
	 * Returns workitems for the project
	 * @param  project_id $id
	 * @return array::Workitem
	 */
	public function workitems_get($id) {
		self::validate_project($id);
		return Project::find($id)->in_progress_workitems();
	}

	/**
	 * Returns distinct workitem types in a project
	 * @param  project_id $id
	 * @return array::WorkitemType
	 */
	public function types_get($id) {
		self::validate_project($id);
		return Project::find($id)->get_types();
	}

	/**
	 * Returns distinct workitem state in a project
	 * @param  project_id $id
	 * @return array::WorkitemState
	 */
	public function states_get($id) {
		self::validate_project($id);
		return Project::find($id)->get_states();
	}

	/**
	 * Returns sprints for the given project
	 * TODO : Change it to return only active sprints
	 * @param  project_id $id
	 * @return array::Sprint
	 */
	public function sprints_get($id) {
		self::validate_project($id);
		return Project::find($id)->sprints;
	}

	/**
	 * Returns users of a project
	 * @param  project_id $id
	 * @return array:User
	 */
	public function users_get($id) {
		self::validate_project($id);
		$options['conditions'] = array('project_id = ?', $id);
		$options['include'] = array('user');
		$options['select'] = 'user_id';
		$result = ProjectUser::find('all', $options);
		$users = array();
		foreach ($result as $value) {
			array_push($users, $value->user);
		}
		return $users;
	}

	/**
	 * Helper function to validate whether user has rights for the project.
	 * @param  project_id $id
	 * @return none. throws exception is not valid
	 */
	private static function validate_project($id) {
		$result = array_filter(Utopia::$user->projects, function($project) use($id){
			return $project->id == $id;
		});
		if(count($result) > 0) { } else {
			throw new Exception(NOT_ALLOWED);
		}
	}
}