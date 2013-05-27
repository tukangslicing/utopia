<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login_model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}

	public function authenticate_user($username,$password)
	{
		$query = "CALL sp_authenticate_user(?,?)";
		$binds = array($username,$password);
		//$binds = array('username' => $username, 'pass' => $password);

		$exec = $this->db->query($query,$binds);

		$result = $exec->row_array();	//single row 

		return $result;
	}

	public function user()
	{
		
	}

}

/* End of file  */
/* Location: ./application/models/ */