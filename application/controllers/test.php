<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';


class Test extends REST_Controller {

	protected $methods = array(
		'index_put' => array('level' => 10, 'limit' => 10),
		'index_delete' => array('level' => 0),
		'level_post' => array('level' => 10),
		'regenerate_post' => array('level' => 10),
	);

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

		$check_me = date_parse($start_date);

		if(!$start_date) 
		{
			echo 'coming here';
			$start_date = date('Y-m-d', strtotime("-3 days"));;
		}
		else
		{
			$start_date = date('Y-m-d', strtotime($start_date));
		}
		if(!$end_date)
		{
			$end_date = date('Y-m-d');
		}
		else
		{
			$end_date = date('Y-m-d', strtotime($end_date));
		}

		//workitem_log query
		$this->db->select('tbl_workitem_log.id, tbl_workitem_log.workitem_id, tbl_workitem_log.action, tbl_workitem_log.user_id, tbl_workitem_log.old_value, tbl_workitem_log.new_value,timestamp');
		$this->db->from('tbl_workitem_log');
		$this->db->join('tbl_workitems', 'tbl_workitem_log.workitem_id = tbl_workitems.id');
		$this->db->join('tbl_projects', 'tbl_workitems.project_id = tbl_projects.id');
		$this->db->where('tbl_workitems.project_id', $project_id);
		$this->db->where('tbl_workitems.project_id', $project_id);
		$this->db->where('tbl_workitem_log.timestamp >', $start_date);
		$this->db->where('tbl_workitem_log.timestamp <', $end_date);
		$workitem_log = $this->db->get()->result_array();
		var_dump($workitem_log);

		//$sql = "SELECT * FROM tbl_workitem_comments WHERE created_at BETWEEN '2013-07-10' AND '2013-07-12s'";
	}

	public function project_log_get()
	{
		$this->load->model('project_model');

		$this->project_model->project_log_insert('task-add',1,123,NULL);
		$this->project_model->project_log_insert('project-update',52,123,NULL);
	}

	public function get_diff_get()
	{
		$this->load->model('project_model');

		$this->project_model->get_diff(5,42,1);
	}

}

/* End of file  */
/* Location: ./application/controllers/ */