<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


require APPPATH.'/libraries/REST_Controller.php';

class Api extends REST_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index_get()
	{
		echo "api";
	}

	public function auth_post()
	{
		$this->load->model('login_model');
		$username = $this->post('username');
		$password = $this->post('password');
		$result = $this->login_model->authenticate_user($username,$password);

		if($result)
		{
			$this->response($result);
		}
		else
		{
			$this->response(array('Login Failed'));
		}
	}

	public function projects_by_user_id_get()
	{
		$this->load->model('user_model');
		$user_id = $this->session->userdata('user_id');
		$data = $this->user_model->select_projects_by_user_id('123');

		$this->response($data);

	}

	public function project_post()
	{
		/* Insert New Project - sp_tbl_projects_insert */
		$this->load->model('user_model');

		$title 			= $this->post('title');
		$description	= $this->post('description');
		$sprint_duration= $this->post('sprint_duration');
		$need_review	= $this->post('need_review');
		$created_by		= $this->post('created_by');
		
		$executed = $this->user_model->projects_insert($title,$description,$sprint_duration,$need_review,$created_by);

		if($executed)
		{
			$this->response(array('status' => 'success'),201);
		}
		else
		{
			$this->response(array('status' => 'failed'),400);
		}
		
	}

	public function project_get()
	{
		/* Get project data by Project ID - sp_tbl_projects_sel */

		$this->load->model('user_model');
		$id = $this->get('id');
		$data = $this->user_model->projects_sel($id);
 
		$this->response($data);

	}	

	public function test_get()
	{
		$id = $this->get('id');

		echo "id = ".$id;
	}

}

/* End of file  */
/* Location: ./application/controllers/ */