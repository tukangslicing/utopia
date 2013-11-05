<?php

class WorkitemLog extends ActiveRecord\Model {
	static $table_name = "tbl_workitem_log";
	
	static $belongs_to = array(
      array('workitem', 'class_name' => 'Workitem'),
      array('user', 'class_name' => 'User')
    );

    public static function get_log_by_project($project_id, $filter) {
      $sql = $filter->get_sql();
      $filterArgs = $filter->get_args();
      array_unshift($filterArgs, $project_id);

      $query = 'SELECT tbl_workitem_log.* FROM 
                tbl_workitem_log, tbl_workitems WHERE tbl_workitems.project_id = ?
                AND tbl_workitem_log.workitem_id = tbl_workitems.id AND ' . $sql;

    	return self::find_by_sql($query, $filterArgs);
    }
}