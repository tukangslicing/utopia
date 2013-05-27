<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller {

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

		$this->load->model('login_model');

		$result = $this->login_model->authenticate_user($username,$password);

		if($result)
		{
			$this->session->set_userdata('user_id',$result['id']);
			$this->session->set_userdata('display_name',$result['display_name']);
			$this->session->set_userdata('email_verified',$result['email_verified']);
			
			return TRUE;
		}
		else
		{
			 $this->form_validation->set_message('login_check','Incorrect Email Password Combination');
			return FALSE;
		}

	}

}

/* End of file  */
/* Location: ./application/controllers/ */