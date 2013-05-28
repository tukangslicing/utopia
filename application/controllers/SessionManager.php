<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class SessionManager extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$this->load->library('form_validation');
        $this->load->helper(array('form','url'));
        $this->form_validation->set_rules('username','Username','required|xss_clean');        
        $this->form_validation->set_rules('password','Password','required|xss_clean|callback_login_check');
        
	    //please re-login redirect message  
       /* $data['re_login'] = NULL; 

        if($this->session->flashdata('user_login')) 
        {
            $data['re_login'] = TRUE;
        }
*/		
        $data = NULL;	
        if ($this->form_validation->run() == FALSE)
        {
                //login failure    
                 $this->load->view('login_view',$data);
        }
        else
        {
            //delete previous autologin db data
            redirect('home');
        }
	}

	public function login_check($password)
	{
		$username = $this->input->post('username');

		$this->load->model('user');

		$result = $this->user->authenticate_user($username, $password);

		if($result)
		{
			$this->session->set_userdata('user_id',$result['user_basic']['id']);
			$this->session->set_userdata('display_name',$result['user_basic']['display_name']);
			$this->session->set_userdata('email_verified',$result['user_basic']['email_verified']);
			return TRUE;
		}
		else
		{
		 	$this->form_validation->set_message('login_check','Incorrect Email Password Combination');
			return FALSE;
		}

	}

	public function logout()
	{
		//$this->session->unset_userdata('user_id');
		$this->session->sess_destroy();
		redirect('SessionManager');
	}

}

/* End of file  */
/* Location: ./application/controllers/ */
?>