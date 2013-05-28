<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Project extends CI_Model {

	public function projects_insert($title,$description,$sprint_duration,$need_review,$created_by)
	{
		$query = " CALL sp_tbl_projects_insert(?,?,?,?,?)";
		$binds = array($title,$description,$sprint_duration,$need_review,$created_by);
		$exec = $this->db->query($query,$binds);
		return $exec;
	}

	public function projects_sel($project_id)
	{
		$query = " CALL sp_tbl_projects_sel(?)";
		$binds = array($project_id);
		$exec = $this->db->query($query,$binds);
		//$exec = $this->db->query($query);
		return $exec->result_array();
	}

}
/* End of file  */
/* Location: ./application/models/ */
?>
