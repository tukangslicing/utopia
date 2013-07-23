<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

class Timeline extends REST_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index_get()
	{
		$project_id = $this->get('project_id');
		$offset = $this->get('offset');
		$start_date = $this->get('start_date');
		$end_date = $this->get('end_date');
		$workitem_id = $this->get('workitem_id');
		if($workitem_id) 
		{
			$workitem_id = explode('-', $workitem_id);
		}
		else
		{
			$workitem_id = array();	
		}

		$check_me = date_parse($start_date);

		if($check_me['day'] == NULL) 
		{
			$start_date = date('Y-m-d', strtotime("-3 days"));;
		}
		else
		{
			$start_date = date('Y-m-d', strtotime($start_date));
		}

		$check_me = date_parse($end_date);
		if($check_me['day'] == NULL) 
		{
			$end_date = date('Y-m-d', strtotime("+1 days"));
		}
		else
		{
			$end_date = date('Y-m-d', strtotime($end_date));
		}

		//workitem_log query
		$this->db->select('tbl_workitem_log.id, tbl_workitem_log.workitem_id, tbl_workitem_log.action, tbl_workitem_log.user_id, tbl_workitem_log.old_value, tbl_workitem_log.new_value,timestamp');
		$this->db->from('tbl_workitem_log');
		$this->db->join('tbl_workitems', 'tbl_workitem_log.workitem_id = tbl_workitems.id');
		$this->db->where('tbl_workitems.project_id', $project_id);
		$this->db->where('tbl_workitems.project_id', $project_id);
		$this->db->where('tbl_workitem_log.timestamp >=', $start_date);
		$this->db->where('tbl_workitem_log.timestamp <=', $end_date);
		if(count($workitem_id) != 0)
		{
			$this->db->where_in('tbl_workitem_log.workitem_id', $workitem_id);
		}
		$workitem_log = $this->db->get()->result_array();
		$queries = $this->db->last_query();

		//workitem_tasks query
		$this->db->select('tbl_workitem_tasks.id,tbl_workitem_tasks.task,tbl_workitem_tasks.done,tbl_workitem_tasks.done_date,tbl_workitem_tasks.workitem_id,tbl_workitem_tasks.user_id');
		$this->db->from('tbl_workitem_tasks');
		$this->db->join('tbl_workitems', 'tbl_workitem_tasks.workitem_id = tbl_workitems.id');
		$this->db->where('tbl_workitems.project_id', $project_id);
		$this->db->where('tbl_workitem_tasks.done_date >=', $start_date);
		$this->db->where('tbl_workitem_tasks.done_date <=', $end_date);
		if(count($workitem_id) != 0)
		{
			$this->db->where_in('tbl_workitem_tasks.workitem_id', $workitem_id);
		}
		$tasks = $this->db->get()->result_array();

		//workitem_comments query
		$this->db->select('tbl_workitem_comments.id,tbl_workitem_comments.workitem_id,tbl_workitem_comments.comment_body,tbl_workitem_comments.created_at,tbl_workitem_comments.created_by');
		$this->db->from('tbl_workitem_comments');
		$this->db->join('tbl_workitems', 'tbl_workitem_comments.workitem_id = tbl_workitems.id');
		$this->db->where('tbl_workitems.project_id', $project_id);
		$this->db->where('tbl_workitem_comments.created_at >=', $start_date);
		$this->db->where('tbl_workitem_comments.created_at <=', $end_date);
		if(count($workitem_id) != 0)
		{
			$this->db->where_in('tbl_workitem_comments.workitem_id', $workitem_id);
		}
		$comments = $this->db->get()->result_array();
		
		$data['data']['workitem_log'] = $workitem_log;
		$data['data']['task_log'] = $tasks;
		$data['data']['comments'] = $comments;
		$data['data']['length'] = count($workitem_id);
		$this->response($data, 200);
	}

}

/* End of file timeline.php */
/* Location: ./application/controllers/api/timeline.php */