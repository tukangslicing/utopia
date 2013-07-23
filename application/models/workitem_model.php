<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Workitem_model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		$this->load->helper('date');
	}

	public function workitem_types($project_id)
	{
		$query = " CALL sp_tbl_workitem_types_by_project_id(?)";
		$binds = array($project_id);

		$exec = $this->db->query($query,$binds);

		return $exec->result_array();
	}

	public function get_by_project_id($project_id, $user_id)
	{
		$this->db->select('*');
		$this->db->from('tbl_workitems');
		$this->db->where(array('tbl_workitems.project_id' => $project_id, 'assigned_to' => $user_id));
		$query = $this->db->get();
		return $query->result_array();
	}

	public function get_comments($workitem_id)
	{
		$query = $this->db->get_where('tbl_workitem_comments', array("workitem_id" => $workitem_id));
		return $query->result_array();
	}

	public function update($workitem_id, $data, $user_id)
	{
		$query = $this->db->get_where('tbl_workitems',  array('id' => $workitem_id), 1, 0);
		$old = $query->result_array();
		$old = $old[0];
		$result = array();
		foreach ($data as $key => $data_val)
		{
		    if (isset($old[$key])) // belongs to old array?
		    {
		        if ($old[$key] != $data_val) // has changed?
		            $result[$key] = $data[$key]; // catch it
		    }
		}

		$log = array();
		$count = 0;
		foreach ($result as $key => $data_val)
		{
			if($key != 'last_updated')
			{
				$log[$count]['workitem_id'] = $workitem_id;
				$log[$count]['old_value'] = $old[$key];
				$log[$count]['new_value'] = $data[$key];
				$log[$count]['action'] = $key;
				$log[$count]['user_id'] = $user_id;
				$count++;
			}
		}
		if($count > 0)
		{
			$this->db->insert_batch('tbl_workitem_log', $log);
		}
		$this->db->where('id', $workitem_id);
		$this->db->update('tbl_workitems', $data);
		$this->set_last_updated($workitem_id);
		return $result;
	}

	public function delete($workitem_id)
	{
		$this->db->delete('tbl_workitems', array("id" => $workitem_id));
		$this->set_last_updated($workitem_id);
		return TRUE;
	}

	public function add_comment($workitem_id, $user_id, $comment_body, $created_at)
	{
		$data = array(
		   'workitem_id' => $workitem_id,
		   'created_by' => $user_id,
		   'comment_body' => $comment_body,
		   'created_at' => $created_at
		);
		$this->db->insert('tbl_workitem_comments', $data);
		$id = $this->db->insert_id();
		$this->set_last_updated($workitem_id);
		$query = $this->db->get_where('tbl_workitem_comments', array('id' => $id));
		return $query->result_array();
	}

	public function delete_comment($comment_id)
	{
		$query = $this->db->delete('tbl_workitem_comments', array('id' => $comment_id)); 
		$this->set_last_updated($workitem_id);
		return $query;
	}

	public function set_last_updated($workitem_id)
	{
		$date = date("Y-m-d H:i:s T", time());
		$this->db->set('last_updated', $date);
		$this->db->where('id', $workitem_id);
		$this->db->update('tbl_workitems');
	}

	public function get_tasks($workitem_id)
	{
		$data = $this->db->get_where('tbl_workitem_tasks', array('workitem_id' => $workitem_id))->result_array();
		return $data;
	}

	public function add_task($body, $workitem_id, $user_id)
	{
		$data = array(
		   'workitem_id' => $workitem_id,
		   'task' => $body,
		   'user_id' => $user_id,
		);
		$this->db->insert('tbl_workitem_tasks', $data);
		$data = $this->db->get_where('tbl_workitem_tasks', array('id' => $this->db->insert_id()))->result_array();
		$this->set_last_updated($workitem_id);
		return $data;
	}

	public function update_task($task_id, $data)
	{
		$date = date("Y-m-d H:i:s T", time());
		$this->db->where('id', $task_id);
		$data['done_date'] = $date;
		$this->db->update('tbl_workitem_tasks', $data);
		$this->set_last_updated($data['workitem_id']);
		return $this->db->affected_rows();
	}

	public function delete_task($task_id, $workitem_id)
	{
		$this->db->delete('tbl_workitem_tasks', array("id" => $task_id));
		$this->set_last_updated($workitem_id);
		return $this->db->affected_rows();
	}
}

/* End of file workitem_model.php */
/* Location: ./application/models/workitem_model.php */