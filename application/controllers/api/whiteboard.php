<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

class Whiteboard extends REST_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		
	}

	public function index_get()
	{
		/*
		 	this controller will only be based for listing out data, edit, delete won't be handled by it
		 	the data we typically need to start with is 
		 	1. All the workitems assigned to current user

		*/
	}

}

/* End of file whiteboard.php */
/* Location: ./application/controllers/api/whiteboard.php */