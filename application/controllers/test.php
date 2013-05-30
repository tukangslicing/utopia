<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Test extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		
		/*$this->load->model('project_model');
		$data = $this->project->project_user_list(59);
		echo "<pre>";
		print_r($data);
		$this->load->model('user_model');

		$result = $this->user->authenticate_user('c@k.com', 'password');
		$user_id = $result['user_basic']['id'];
		print_r($result);*/
		/*
		$flag = FALSE;
		foreach ($data as $key => $value) {
			if($value['id'] == '23')
			{
				$flag = TRUE;
			}
		}

		print_r($flag);
		*/
		echo 'coming here';
	}

}

/* End of file  */
/* Location: ./application/controllers/ */