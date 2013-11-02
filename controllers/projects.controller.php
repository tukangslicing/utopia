<?php

class ProjectController extends BaseController {
	
	public function index_get($id = NULL) {
		if($id) {
			return array_filter(Utopia::$user->projects, function($project) use($id){
				return $project->id == $id;
			});
		}
		return Utopia::$user->projects;
	}
}