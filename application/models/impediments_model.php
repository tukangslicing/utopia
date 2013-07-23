<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Impediments_model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}
	/*
			DROP PROCEDURE IF EXISTS db_utopia.sp_tbl_impediments_unresolved_lst;
			CREATE PROCEDURE db_utopia.`sp_tbl_impediments_unresolved_lst`(pkid bigint(20))
			BEGIN
				SELECT id,
				       issue_title,
				       project_id,
				       workitem_id,
				       created_by,
				       created_at,
				       is_resolved
				  FROM tbl_impediments
				 WHERE project_id = pkid 
			   AND is_resolved = 0;
			END;

	*/

	public function impediments_unresolved($project_id)
	{
		/*$query = " CALL sp_tbl_impediments_unresolved_lst(?)";
		$binds = array($project_id);
		$exec = $this->db->query($query,$binds);*/
		$query = $this->db->get_where('tbl_impediments', array("project_id" => $project_id, "is_resolved" => 1));
		return $query->result();
	}

}

/* End of file impediments_model.php */
/* Location: ./application/models/impediments_model.php */