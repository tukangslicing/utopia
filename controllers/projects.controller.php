<?php

class ProjectController extends BaseController {
	
	public function index_get($id = NULL) {
		if($id) {
			self::validate_project($id);
			return Project::find($id);
		}
		return Utopia::$user->projects;
	}

	public function workitems_get($id) {
		self::validate_project($id);
		return Project::find($id)->in_progress_workitems();
	}

	private static function validate_project($id) {
		$result = array_filter(Utopia::$user->projects, function($project) use($id){
			return $project->id == $id;
		});
		if(count($result) > 0) { } else {
			throw new Exception("You're not allowed to access this data");
		}
	}

	public function types_get($id) {
		self::validate_project($id);
		return Project::find($id)->get_types();
	}

	public function states_get($id) {
		self::validate_project($id);
		return Project::find($id)->get_states();
	}

	public function sprints_get($id) {
		self::validate_project($id);
		return Project::find($id)->sprints;
	}

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
}