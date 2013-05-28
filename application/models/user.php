<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}

	public function get_user_projects($user_id)
	{
		$query = " CALL sp_select_projects_by_user_id(?)";
		$binds = array($user_id);

		$exec = $this->db->query($query,$binds);

		return $exec->result_array();
	}

	public function authenticate_user($username,$password)
	{	
		$data = NULL;

		$query = "CALL sp_authenticate_user(?,?)";
		$binds = array($username,$password);
		$exec = $this->db->query($query,$binds);
		$result  = $exec->row_array();

		if($result)
		{
			$data = $this->get_user_data($result['id']);
			$data['user_basic'] = $result;
		}
		
		//instead of directly returning the info  call this get_user_data
		return $data;
	}

	private function get_user_data($user_id) {
		//TODO
		/*
			fetch user related details
			fetch his projects
			return both as an array
		*/	
		$user_id = 123;
		$data['user_projects'] = $this->get_user_projects($user_id);
		$data['user_details'] = NULL;

		return $data;
	}

	public function user_login_grant()	//check if user is logged in 
	{
		if($this->session->userdata('user_id'))
		{
			return TRUE;
		}
		else
		{
			return FALSE;
		}
	}
}
/* End of file  */
/* Location: ./application/models/ */
?>
