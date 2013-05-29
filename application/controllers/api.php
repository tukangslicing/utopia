<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


require APPPATH.'/libraries/REST_Controller.php';

/*
	HTTP response Codes Used

	200 : OK default
	201 : Created (for POST and PUT)
	400 : Bad Request
	401 : Authorization Required
	
*/

	class Api extends REST_Controller {

		public function __construct()
		{
			parent::__construct();
			$this->load->model('user');
			$this->load->model('project');

			$api_key = $this->get('api-key');
			if( ! $this->user->validate_api_key($api_key))
			{
				$response['action_result'] = FALSE;
				$response['data'] = NULL;
				$response['message'] = "Falied To Validate Access Token.";
				$this->response($response,401);
			}			
			
		}

		public function index_get()
		{
			echo "api";
		}

		/*
		Get Projects by Project ID
		*/
		public function projects_get()
		{
				
			$id = $this->get('id');
			//checking if user have access to this project
			if ( ! $this->project->project_user_grant($id) )
			{
				$response['action_result'] = FALSE;
				$response['data'] = NULL;
				$response['message'] = "You Dont have Access to this Project.";
				$this->response($response,400);
			}
			else
			{
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
				
				$this->response($response,200);
			}
		}	

		public function projects_post()
		{
			/* Insert New Project - sp_tbl_projects_insert */

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

		public function projects_put()
		{
			$id = $this->get('id');
			//checking if user have access to this project
			if ( ! $this->project->project_user_grant($id) )
			{
				$response['action_result'] = FALSE;
				$response['data'] = NULL;
				$response['message'] = "You Dont have Access to this Project.";
				$this->response($response,400);
			}
			else
			{
			
				$data = array(
					'id'					=> $id,
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

		public function test_delete()
		{
			$this->response('msg',401);
		}

		public function user_projects_get() {
				//$id = $this->get('id');
				$user_id = $this->session->userdata('user_id');
				$exec = $this->user->get_user_projects($user_id);
				$response['action_result'] = TRUE;
				$response['data'] = $exec;
				$this->response($response);
			
		}

}

/* End of file  */
/* Location: ./application/controllers/ */