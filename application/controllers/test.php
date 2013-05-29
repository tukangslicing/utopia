<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Test extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		
		$this->load->model('project');
		$data = $this->project->project_user_list(59);
		echo "<pre>";
		print_r($data);
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
	}

}

/* End of file  */
/* Location: ./application/controllers/ */