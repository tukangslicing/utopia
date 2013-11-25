<?php

class ImpedimentsController extends BaseController {
	
	/**
	 * Returns all the impediments in current project
	 * @param  [type] $project_id [description]
	 * @return [type]             [description]
	 */
	public function index_get($project_id, $id = NULL) {
		if($id) {
			$imp = Impediments::find($id);
			ProjectController::validate_access($imp->project_id);	
			return $imp;
		}
		ProjectController::validate_access($project_id);
		$filter = new ImpedimentFilter();
		$filter = deserialize($this->get_data(), $filter);
		$filter->build_sql();
		return Impediments::find_by_filter($project_id, $filter);
	}

	/**
	 * Updates an impediment
	 * @return [type] [description]
	 */
	public function index_put() {
		$id = $this->put('id');
		$imp = Impediments::find($id);
		ProjectController::validate_access($imp->project_id);
		$imp = deserialize($this->get_data(), $imp);
		return $imp->save();
	}

	/**
	 * Creates a new impediment
	 * @param  [type] $project_id [description]
	 * @return [type]             [description]
	 */
	public function index_post($project_id) {
		ProjectController::validate_access($project_id);
		$imp = new Impediments();
		$imp = deserialize($this->get_data(), $imp);
		$imp->created_at = now();
		$imp->created_by = Utopia::$user->id;
		$imp->project_id = $project_id;
		$imp->is_resolved = 0;
		$imp->save();
		return $imp;
	}

	/**
	 * Removes an impediment
	 * @param  [type] $project_id [description]
	 * @param  [type] $id         [description]
	 * @return [type]             [description]
	 */
	public function index_delete($project_id, $id) {
		ProjectController::validate_access($project_id);
		$imp = Impediments::find($id);
		return $imp->delete();
	}

	/**
	 * Returns list of impediment comments
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function comments_get($id) {
		$impediment = Impediments::find($id);
		ProjectController::validate_access($impediment->project_id);
		return $impediment->comments;
	}

	/**
	 * Removes a comment
	 * @param  [type] $imp_id     [description]
	 * @param  [type] $comment_id [description]
	 * @return [type]             [description]
	 */
	public function comments_delete($imp_id, $comment_id) {
		$impediment = Impediments::find($imp_id);
		ProjectController::validate_access($impediment->project_id);

		$comment = ImpedimentComments::find($comment_id);
		return $comment->delete();
	}

	/**
	 * Creates a comment on impediment
	 * @param  [type] $id [description]
	 * @return [type]     [description]
	 */
	public function comments_post($id) {
		$impediment = Impediments::find($id);
		ProjectController::validate_access($impediment->project_id);
		$comment = new ImpedimentComments();
		$comment->comment_body = $this->post('comment_body');
		$comment->created_at = now();
		$comment->created_by = Utopia::$user->id;
		$comment->impediment_id = $id;
		$comment->save();
		return $comment;
	}
}