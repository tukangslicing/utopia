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
			$this->load->model('user');
			$this->load->model('project');
		}

		public function index_get()
		{
			echo "api";
		}

		public function auth_post()
		{
			
			$username = $this->post('username');
			$password = $this->post('password');
			$result = $this->user->authenticate_user($username,$password);

			if($result)
			{
				
				$this->session->set_userdata('user_id',$result['user_basic']['id']);
				$this->session->set_userdata('display_name',$result['user_basic']['display_name']);
				$this->session->set_userdata('email_verified',$result['user_basic']['email_verified']);

				$response['action_result'] = TRUE;
				$response['data'] = $result;
				$response['api_token'] = rand(1111, 99999);
				$response['message'] = "Login Success";
				
				$this->response($response);
			}
			else
				{	$response['action_result'] = FALSE;
			$response['data'] = NULL;
			$response['message'] = "Login Failed";
			$this->response($response);
		}
	}

	/* projects_by_user_id_get - this is a complex name, api should be at the max 2 words
		for eg,
		GET localhost/projects - retrieves a list of project
		PUT localhost/projects/:project_id - updates a project
		DELETE localhost/projects/:project_id - delets a project
		POST localhost/projects/ - Creates a project
	*/

	/*
	Get Projects by User ID
	*/
	public function projects_user_get()
	{
		$login = $this->user->user_login_grant();
		if(!$login)
		{
			$response['action_result'] = FALSE;
			$response['data'] = NULL;
			$response['message'] = "Login Failed";
			$this->response($response);
		}
		else
		{	

			$user_id = $this->session->userdata('user_id');
			$data = $this->user->get_user_projects($user_id);

			$response['action_result'] = TRUE;
			$response['data'] = $data;
			$response['message'] = "Success";

			$this->response($data);
		}

	}

	/*
	Get Projects by Project ID
	*/
	public function projects_get()
	{
		
		$login = $this->user->user_login_grant();
		if(!$login)
		{
			$response['action_result'] = FALSE;
			$response['data'] = NULL;
			$response['message'] = "Login Failed";
			$this->response($response);
		}
		else
		{
			$id = $this->get('id');
			$exec = $this->project->projects_sel($id);
			$response['action_result'] = TRUE;
			$response['data'] = $exec;
			if($exec)
			{
				$response['message'] = "Success";
			}
			else
			{
				$response['message'] = "Not Found";				
			}
			
			$this->response($response);
		}
	}	

	public function projects_post()
	{
		/* Insert New Project - sp_tbl_projects_insert */

		$login = $this->user->user_login_grant();
		if(!$login)
		{
			$response['action_result'] = FALSE;
			$response['data'] = NULL;
			$response['message'] = "Login Failed";
			$this->response($response);
		}
		else
		{

			$title 			= $this->post('title');
			$description	= $this->post('description');
			$sprint_duration= $this->post('sprint_duration');
			$need_review	= $this->post('need_review');
			$created_by		= $this->post('created_by');
			
			$executed = $this->project->projects_insert($title,$description,$sprint_duration,$need_review,$created_by);
			
			$response['data'] =NULL;

			if($executed)
			{
				$response['action_result'] = TRUE;
				$response['message'] = "Insert Success";
				$this->response($response,201);
			}
			else
			{
				$response['action_result'] = FALSE;
				$response['message'] = "Failed To Insert";
				$this->response($response,400);
			}
		}
		
	}

	public function projects_put()
	{

		$login = $this->user->user_login_grant();
		if(!$login)
		{
			$response['action_result'] = FALSE;
			$response['data'] = NULL;
			$response['message'] = "Login Failed";
			$this->response($response);
		}
		else
		{
			$data = array(
				'id'					=> $this->put('id'),
				'title' 				=> $this->put('title'),
				'description'			=> $this->put('description'),
				'sprint_duration'		=> $this->put('sprint_duration'),
				'need_review'			=> $this->put('need_review'),
				'calculate_velocity_on' => $this->put('calculate_velocity_on'),
				'created_by'			=> $this->put('created_by'),
				);
			
			$executed = $this->project->projects_update($data);
			
			$response['data'] =NULL;

			if($executed)
			{
				$response['action_result'] = TRUE;
				$response['message'] = "Update Success";
				$this->response($response,201);
			}
			else
			{
				$response['action_result'] = FALSE;
				$response['message'] = "Failed To Update";
				$this->response($response,400);
			}
		}
	}
	
	public function projects_delete()
	{
		$login = $this->user->user_login_grant();
		if(!$login)
		{
			$response['action_result'] = FALSE;
			$response['data'] = NULL;
			$response['message'] = "Login Failed";
			$this->response($response);
		}
		else
		{
			$id = $this->get('id');
			$exec = $this->project->projects_delete($id);

			$response['action_result'] = TRUE;
			$response['data'] = $exec;

			if($exec)
			{
				$response['message'] = "Deleted";
				$this->response($response,201);
			}
			else
			{
				$response['message'] = "Unable To Delete";
				$this->response($response,400);
			}
			
		}
	}

	public function test_delete()
	{
		$id = $this->get('id');
		echo "id = ".$id;
	}

	public function user_projects_get() {
		$login = $this->user->user_login_grant();
		if(!$login)
		{
			$response['action_result'] = FALSE;
			$response['data'] = NULL;
			$response['message'] = "Login Failed";
			$this->response($response);
		}
		else 
		{
			//$id = $this->get('id');
			$user_id = $this->session->userdata('user_id');
			$exec = $this->user->get_user_projects($user_id);
			$response['action_result'] = TRUE;
			$response['data'] = $exec;
			$this->response($response);
		}
	}

}

/* End of file  */
/* Location: ./application/controllers/ */