<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Project extends CI_Model {

	//GET
	public function projects_sel($project_id)
	{
		$query = " CALL sp_tbl_projects_sel(?)";
		$binds = array($project_id);
		$exec = $this->db->query($query,$binds);
		return $exec->result_array();
	}

	//POST
	public function projects_insert($title,$description,$sprint_duration,$need_review,$created_by)
	{
		$query = " CALL sp_tbl_projects_insert(?,?,?,?,?)";
		$binds = array($title,$description,$sprint_duration,$need_review,$created_by);
		$exec = $this->db->query($query,$binds);
		return $exec;
	}

	//PUT
	public function projects_update($data)
	{
		$query = " CALL sp_tbl_projects_upd(?,?,?,?,?,?,?)";
		$binds = array( $data['id'],
						$data['title'],
						$data['description'],
						$data['sprint_duration'],
						$data['need_review'],
						$data['calculate_velocity_on'],
						$data['created_by']
						);
		$exec = $this->db->query($query,$binds);
		return $exec;
	}
	
	//DELETE
	public function projects_delete($project_id)
	{		
		$query = " CALL sp_tbl_projects_del(?)";
		$binds = array($project_id);
		$exec = $this->db->query($query,$binds);
		if( $this->db->affected_rows())
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