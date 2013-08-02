<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

class Workitem extends REST_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('workitem_model');
		$this->load->model('user_model');
		$this->load->model('project_model');

		// do validation here
	}

	public function index_get()
	{
		$project_id = $this->get('project_id');
		$data = $this->workitem_model->get_by_project_id($project_id, $this->user_id);
		$response['data'] = $data;
		$this->response($response, 200);
	}

	public function index_post()
	{
		$data = $this->post('data');
		$workitem_id = $this->post('workitem_id');
		$result = $this->workitem_model->update($workitem_id, $data, $this->user_id);
		$response['data'] = $result; 
		//insert into tbl_project_log
		$this->project_model->project_log_insert('workitem-update',$workitem_id,$this->user_id,NULL);

		$this->response($response, 200);
	}

	public function index_delete()
	{
		$workitem_id = $this->get('workitem_id');
		$data = $this->workitem_model->delete($workitem_id);
		$response['data'] = $data;
		$this->response($response, 200);
	}

	public function comments_get() 
	{
		$project_id = $this->get('project_id');
		$workitem_id = $this->get('workitem_id');
		$data = $this->workitem_model->get_comments($workitem_id);
		$response['data'] = $data;
		$this->response($response, 200);
	}

	public function comments_post() 
	{
		$workitem_id = $this->post('workitem_id');
		$comment_body = $this->post('comment_body');
		$data = $this->workitem_model->add_comment($workitem_id, $this->user_id, $comment_body);
		$response['data'] = $data;

		//insert into tbl_project_log
		$this->project_model->project_log_insert('comment-add',$workitem_id,$this->user_id,NULL);

		$this->response($response, 200);
	}

	public function comments_delete() 
	{
		$workitem_comment_id = $this->get('workitem_comment_id');
		$data = $this->workitem_model->delete_comment($workitem_comment_id);
		$response['data'] = $data;

		//insert into tbl_project_log
		$this->project_model->project_log_insert('comment-remove',$workitem_comment_id,$this->user_id,NULL);

		$this->response($response, 200);
	}

	public function tasks_get()
	{
		$workitem_id = $this->get('workitem_id');
		$response['data'] = $this->workitem_model->get_tasks($workitem_id);
		$this->response($response, 200);
	}

	public function tasks_post()
	{
		$body = $this->post('task');
		$workitem_id = $this->get('workitem_id');
		$task_id = $this->get('task_id');
		if(!$task_id)
		{
			$response['data'] = $this->workitem_model->add_task($body, $workitem_id, $this->user_id);
			//insert into tbl_project_log
			$this->project_model->project_log_insert('task-add',$workitem_id,$this->user_id,NULL);

		}
		else
		{
			$data = $this->post('data');
			$data['user_id'] = $this->user_id;
			$response['data'] = $this->workitem_model->update_task($task_id, $data);	
			$response['task_id'] = $task_id;
			//insert into tbl_project_log
			$this->project_model->project_log_insert('task-update',$workitem_id,$this->user_id,NULL);

		}
		$this->response($response, 200);
	}

	public function tasks_delete()
	{
		$task_id = $this->get('task_id');
		$workitem_id = $this->get('workitem_id');
		$data = $this->workitem_model->delete_task($task_id, $workitem_id);
		$response['data'] = $data;

		//insert into tbl_project_log
		$this->project_model->project_log_insert('task-remove',$workitem_id,$this->user_id,NULL);

		$this->response($response, 200);
	}
}

/* End of file whiteboard.php */
/* Location: ./application/controllers/api/whiteboard.php */