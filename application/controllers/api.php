<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


require APPPATH.'/libraries/REST_Controller.php';

class Api extends REST_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		echo "api";
		$query = "SELECT * FROM `tbl_users`";
		$this->db->query($query);
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

}

/* End of file  */
/* Location: ./application/controllers/ */