<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Project_model extends CI_Model {

	//GET
	public function projects_sel($project_id)
	{
		$query = " CALL sp_tbl_projects_sel(?)";
		$binds = array($project_id);
		$exec = $this->db->query($query,$binds);
		return $exec->result_array();
	}

	public function project_modules($project_id)
	{
		$query = "CALL sp_tbl_project_modules_lst(?)";
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

	//SELECT project users by project ID
	public function project_user_list($project_id)
	{		
		$query = " CALL sp_tbl_project_users_select_by_project_id(?)";
		$binds = array($project_id);
		$exec = $this->db->query($query,$binds);

		return $exec->result_array();
	}

	//Check if User Is Allowed to Access Project 
	public function project_user_grant($project_id,$user_id)
	{
		$data = $this->project_user_list($project_id);
		$flag = FALSE;
		foreach ($data as $key => $value) 
		{
			if($value['id'] == $user_id)
			{
				$flag = TRUE;
			}
		}

		return $flag;
	}

	public function get_details($project_id) {
		$types = $this->db->get_where('tbl_workitem_types', array('project_id' => $project_id));
		$types = $types->result_array();
		
		for ($index=0; $index < 5; $index++) { 
			$current = $types[$index];
			$this->db->select('*');
			$this->db->from('tbl_workitem_states');
			$this->db->where('workitem_type_id', $current['id']);
			$states = $this->db->get();
			$types[$index]['states'] = $states->result_array();
		}	

		$this->db->select('*');
		$this->db->from('tbl_milestones');
		$this->db->where('project_id', $project_id);
		$this->db->order_by('start_date', 'desc');
		$this->db->limit(3);
		$sprints = $this->db->get()->result_array();

		$this->db->select('*');
		$this->db->from('tbl_users');
		$this->db->join('tbl_project_users', 'user_id = tbl_users.id');
		$this->db->where('project_id', $project_id);
		$users = $this->db->get()->result_array(); 

		$project = $this->db->get_where('tbl_projects', array('id' => $project_id))->result();

		$data['project'] = $project;
		$data['users'] = $users;
		$data['workitem_types'] = $types;
		$data['sprints'] = $sprints;

		return $data;
	}

	public function project_log_insert($event,$subject_id,$user_id,$target_id)
	{
		$query = " INSERT INTO `tbl_project_log` (event,project_id,user_id,target_id) VALUES ( ?,?,?,? )";
		//id (auto), timestamp (default)
		//`project_id` to be selected depending on `event`


		switch ($event) {

			//here $subject_id is `workitem_id` => select project_id 
			case 'workitem-update':
			case 'comment-add':
			case 'comment-remove':
			case 'task-add':
			case 'task-remove':
			case 'task-update':
				 	$query_project = "SELECT project_id FROM tbl_workitems WHERE id = ?";
				 	$exec = $this->db->query($query_project,$subject_id);
				 	$result = $exec->row_array();
				 	$project_id = $result['project_id'];
				break;

			//project_id = subject_id
			case 'project-update':
					$project_id = $subject_id;
				break;
							
			default:

				break;
		}

		$binds = array($event,$project_id,$user_id,$target_id);

		//print_r($binds);
		$exec  = $this->db->query($query,$binds);

		return $this->db->affected_rows();
	}

	public function get_diff($log_id,$project_id,$user_id)
	{
		$query = "SELECT 
				  tbl_project_log.id, 
				  tbl_project_log.event, 
				  tbl_project_log.project_id, 
				  tbl_project_log.user_id, 
				  tbl_project_log.target_id, 
				  tbl_project_log.`timestamp`
				FROM tbl_project_log
				WHERE 
				  id > ?
				  AND project_id = ? 
				  AND user_id != ?
				ORDER BY id DESC";
		$binds = array($log_id,$project_id,$user_id);
		$exec  = $this->db->query($query,$binds);
		$result = $exec->result_array();

		echo json_encode($result);
	}
}
/* End of file  */
/* Location: ./application/models/ */