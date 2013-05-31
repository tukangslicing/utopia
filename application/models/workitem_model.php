<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Workitem_model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}

	public function workitem_types($project_id)
	{
		$query = " CALL sp_tbl_workitem_types_by_project_id(?)";
		$binds = array($project_id);

		$exec = $this->db->query($query,$binds);

		return $exec->result_array();
	}

}

/* End of file workitem_model.php */
/* Location: ./application/models/workitem_model.php */