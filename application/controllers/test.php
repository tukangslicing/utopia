<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Test extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$username = 'a';
		$password = 'password';
		$query = "call sp_authenticate_user(?,?)";
		$binds = array($username, $password);

		$exec = $this->db->query("call sp_authenticate_user('a','b')");

		$result = $exec->result();

		print_r($result);
	}

}

/* End of file  */
/* Location: ./application/controllers/ */