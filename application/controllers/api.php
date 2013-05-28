<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


require APPPATH.'/libraries/REST_Controller.php';

/*

	All responses should be in this format 

	$array['action_result'] = true / false
	$array['data'] = data returned by query
	$array['message'] = message you wanna send to client, like login failed or login succeeded etc

	$this->response($array);

	Model represent entitiy in project like user, project, workitem, impediment.
	Whereas Controller represents action taken by user with respect to view
	so controllers shoule be Login => contains login logout functions

	we need to write a login_model for interacting with database
	also its ok if we don't append _model for each class, "User" should suffice the use
*/

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
		$this->load->model('user');
		$username = $this->post('username');
		$password = $this->post('password');
		$result = $this->user->authenticate_user($username,$password);

		if($result)
		{
			$this->response($result);
			$this->session->set_userdata('user_id',$result['id']);
			$this->session->set_userdata('display_name',$result['display_name']);
			$this->session->set_userdata('email_verified',$result['email_verified']);
		}
		else
		{
			$this->response(array('Login Failed'));
		}
	}

	public function projects_by_user_id_get()
	{
		$this->load->model('user');
		$user_id = $this->session->userdata('user_id');
		$data = $this->user->get_projects('123');

		$this->response($data);

	}

	public function project_post()
	{
		/* Insert New Project - sp_tbl_projects_insert */
		$this->load->model('project');

		$title 			= $this->post('title');
		$description	= $this->post('description');
		$sprint_duration= $this->post('sprint_duration');
		$need_review	= $this->post('need_review');
		$created_by		= $this->post('created_by');
		
		$executed = $this->project->projects_insert($title,$description,$sprint_duration,$need_review,$created_by);

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
		$this->load->model('user');
		$id = $this->get('id');
		$data = $this->user->get_projects($id);
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