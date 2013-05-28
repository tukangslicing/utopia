<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}

	public function get_projects($user_id)
	{
		$query = " CALL sp_select_projects_by_user_id(?)";
		$binds = array($user_id);

		$exec = $this->db->query($query,$binds);

		return $exec->result();
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
}
/* End of file  */
/* Location: ./application/models/ */
?>
