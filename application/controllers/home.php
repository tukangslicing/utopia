<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		echo "SESSION => <pre>";
		print_r($this->session->all_userdata());
		echo "<pre> <a href='".site_url('SessionManager/logout')."'>logout</a>";
	}

}

/* End of file  */
/* Location: ./application/controllers/ */