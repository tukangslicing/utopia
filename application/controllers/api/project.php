<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

/*
	HTTP response Codes Used

	200 : OK default
	201 : Created (for POST and PUT)
	400 : Bad Request
	401 : Authorization Required
	
*/

// To access user_id just do $this->user_id

class Project extends REST_Controller {

		public function __construct()
		{
			parent::__construct();
			$this->load->model('project_model');
			$this->load->model('user_model');
		}

		/*
			Get Projects by Project ID
			original call : localhost/utopia/api/project/index/42
			new call 	  : localhost/utopia/api/project/42
		    index  removed  with config/routes
		*/

		private function _project_validation($project_id,$user_id)
		{
			if(!$project_id)
			{
				$response['action_result'] = FALSE;
				$response['data'] = NULL;
				$response['message'] = "Please give project id .";
				$this->response($response,400);
			}
			elseif( ! $this->project_model->project_user_grant($project_id,$user_id) )
			{
				$response['action_result'] = FALSE;
				$response['data'] = NULL;
				$response['message'] = "You Dont have Access to this Project.";
				$this->response($response,400);
			}
			
		}

		public function index_get($project_id = NULL)
		{
			if($project_id == NULL) {
				$this->user_projects_get();
				return;
			}
			$user_id = $this->user_id;
			$this->_project_validation($project_id,$user_id);
	
			$data['project'] = $this->project_model->projects_sel($project_id);
			$data['modules'] = $this->project_model->project_modules($project_id);
			$data['project_users'] = $this->project_model->project_user_list($project_id);

			$this->load->model('impediments_model');			
			$this->load->model('workitem_model');
			//Is this giving correct data ? 
			$data['workitem_types'] = $this->workitem_model->workitem_types($project_id);
			$data['impediments_unresolved'] = $this->impediments_model->impediments_unresolved($project_id);


			$response['action_result'] = TRUE;
			
			if($data)
			{
				$response['data'] = $data;
				$response['message'] = "Success";
				$this->response($response,200);
			}
			else
			{
				$response['data'] = NULL;
				$response['message'] = "Not Found";
				$this->response($response,400);				
			}
					
					
		}	

		public function index_post()
		{
			/* Insert New Project - sp_tbl_projects_insert */

			$title 			= $this->post('title');
			$description	= $this->post('description');
			$sprint_duration= $this->post('sprint_duration');
			$need_review	= $this->post('need_review');
			$created_by		= $this->user_id; 
			$executed = $this->project_model->projects_insert($title,$description,$sprint_duration,$need_review,$created_by);

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

		//	localhost/utopia/api/project/58
		public function index_put($project_id = NULL)
		{
			
			$user_id = $this->user_id;
			$this->_project_validation($project_id,$user_id);

			$data = array(
				'id'					=> $project_id,
				'title' 				=> $this->put('title'),
				'description'			=> $this->put('description'),
				'sprint_duration'		=> $this->put('sprint_duration'),
				'need_review'			=> $this->put('need_review'),
				'calculate_velocity_on' => $this->put('calculate_velocity_on'),
				'created_by'			=> $this->put('created_by'),
				);
			
			$executed = $this->project_model->projects_update($data);
			
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
		
		//	localhost/utopia/api/project/58
		public function index_delete($project_id = NULL)
		{
			
			$user_id = $this->user_id;
			$this->_project_validation($project_id,$user_id);

			$exec = $this->project_model->projects_delete($project_id);

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

		//	localhost/utopia/api/project/user_projects
		public function user_projects_get() {
			$user_id = $this->user_id;
			$exec = $this->user_model->get_user_projects($user_id);
			$response['action_result'] = TRUE;
			$response['data'] = $exec;
			$this->response($response);
		}

		public function details_get() {
			$project_id = $this->get('project_id');
			$user_id = $this->user_id;
			$this->_project_validation($project_id, $user_id);
			$exec = $this->project_model->get_details($project_id);

			$response['action_result'] = TRUE;
			$response['data'] = $exec;
			$this->response($response, 200);
		}

}

/* End of file project.php */
/* Location: ./application/controllers/api/project.php */