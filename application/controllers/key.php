<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Keys Controller
 *
 * This is a basic Key Management REST controller to make and delete keys.
 *
 * @package		CodeIgniter
 * @subpackage	Rest Server
 * @category	Controller
 * @author		Phil Sturgeon
 * @link		http://philsturgeon.co.uk/code/
*/

// This can be removed if you use __autoload() in config.php
require(APPPATH.'/libraries/REST_Controller.php');

class Key extends REST_Controller
{
	protected $methods = array(
		'index_put' => array('level' => 10, 'limit' => 10),
		'index_delete' => array('level' => 10),
		'level_post' => array('level' => 10),
		'regenerate_post' => array('level' => 10),
	);

	/**
	 * Key Create
	 *
	 * Insert a key into the database.
	 *
	 * @access	public
	 * @return	void
	 */
	public function index_put()
    {
		// Build a new key
		$key = self::_generate_key();

		// If no key level provided, give them a rubbish one
		$level = $this->put('level') ? $this->put('level') : 1;
		$ignore_limits = $this->put('ignore_limits') ? $this->put('ignore_limits') : 1;

		// Insert the new key
		if (self::_insert_key($key, array('level' => $level, 'ignore_limits' => $ignore_limits)))
		{
			$this->response(array('status' => 1, 'key' => $key), 201); // 201 = Created
		}

		else
		{
			$this->response(array('status' => 0, 'error' => 'Could not save the key.'), 500); // 500 = Internal Server Error
		}
    }

    //to help us create API key for user
    /**
	 * Key Create
	 *
	 * Insert a key into the database.
	 *
	 * @access	public
	 * @return	void
	 */
	public function index_post()
    {
		// Build a new key
		$key = self::_generate_key();

		// If no key level provided, give them a rubbish one
		$level = 1;
		$ignore_limits = 1;

		/*
			authenticate user here 
			by $this->post('username') , $this->post('password') retrieve the user_id
			and pass it to _insert_key
		*/
		$this->load->model('user_model');
		$username = $this->post('username');
		$password = $this->post('password');

		$user_data = $this->user_model->authenticate_user($username,$password);
		$user_id = $user_data['user_basic']['id'];
		/*

			Create a table like this

			CREATE TABLE `tbl_api_keys` (
				  `id` int(11) NOT NULL AUTO_INCREMENT,
				  `key` varchar(40) NOT NULL,
				  `level` int(2) NOT NULL,
				  `ignore_limits` tinyint(1) NOT NULL DEFAULT '0',
				  `is_private_key` tinyint(1)  NOT NULL DEFAULT '0',
				  `ip_addresses` TEXT NULL DEFAULT NULL,
				  `date_created` int(11) NOT NULL,
				  `user_id` bigint(20) NOT NULL
				  PRIMARY KEY (`id`)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8;

			while loading back, the request keys are handled in REST_Controller->_detect_api_key method
			there we can retrieve the user_id and set it as parameter to REST_Controller class, 
			so all the children classes will automatically have access to user_id,

			set the config table to tbl_api_keys
			$config['rest_keys_table'] = 'keys';

			at last set enable API keys to TRUE
			$config['rest_enable_keys'] = FALSE;

			when testing the api, add a header field named 'UTOPIA-SERVER-VERSION' and put your generated key there
			$config['rest_key_name'] = 'UTOPIA-SERVER-VERSION';
		*/

		// Insert the new key
		if (self::_insert_key($key, array('level' => $level, 'ignore_limits' => $ignore_limits,'user_id' => $user_id)))
		{
			$this->response(array('status' => 1, 'key' => $key), 201); // 201 = Created
		}

		else
		{
			$this->response(array('status' => 0, 'error' => 'Could not save the key.'), 500); // 500 = Internal Server Error
		}
    }

	// --------------------------------------------------------------------

	/**
	 * Key Delete
	 *
	 * Remove a key from the database to stop it working.
	 *
	 * @access	public
	 * @return	void
	 */
	public function index_delete()
    {
		$key = $this->delete('key');

		// Does this key even exist?
		if ( ! self::_key_exists($key))
		{
			// NOOOOOOOOO!
			$this->response(array('status' => 0, 'error' => 'Invalid API Key.'), 400);
		}

		// Kill it
		self::_delete_key($key);

		// Tell em we killed it
		$this->response(array('status' => 1, 'success' => 'API Key was deleted.'), 200);
    }

	// --------------------------------------------------------------------

	/**
	 * Update Key
	 *
	 * Change the level
	 *
	 * @access	public
	 * @return	void
	 */
	public function level_post()
    {
		$key = $this->post('key');
		$new_level = $this->post('level');

		// Does this key even exist?
		if ( ! self::_key_exists($key))
		{
			// NOOOOOOOOO!
			$this->response(array('error' => 'Invalid API Key.'), 400);
		}

		// Update the key level
		if (self::_update_key($key, array('level' => $new_level)))
		{
			$this->response(array('status' => 1, 'success' => 'API Key was updated.'), 200); // 200 = OK
		}

		else
		{
			$this->response(array('status' => 0, 'error' => 'Could not update the key level.'), 500); // 500 = Internal Server Error
		}
    }

	// --------------------------------------------------------------------

	/**
	 * Update Key
	 *
	 * Change the level
	 *
	 * @access	public
	 * @return	void
	 */
	public function suspend_post()
    {
		$key = $this->post('key');

		// Does this key even exist?
		if ( ! self::_key_exists($key))
		{
			// NOOOOOOOOO!
			$this->response(array('error' => 'Invalid API Key.'), 400);
		}

		// Update the key level
		if (self::_update_key($key, array('level' => 0)))
		{
			$this->response(array('status' => 1, 'success' => 'Key was suspended.'), 200); // 200 = OK
		}

		else
		{
			$this->response(array('status' => 0, 'error' => 'Could not suspend the user.'), 500); // 500 = Internal Server Error
		}
    }

	// --------------------------------------------------------------------

	/**
	 * Regenerate Key
	 *
	 * Remove a key from the database to stop it working.
	 *
	 * @access	public
	 * @return	void
	 */
	public function regenerate_post()
    {
		$old_key = $this->post('key');
		$key_details = self::_get_key($old_key);

		// The key wasnt found
		if ( ! $key_details)
		{
			// NOOOOOOOOO!
			$this->response(array('status' => 0, 'error' => 'Invalid API Key.'), 400);
		}

		// Build a new key
		$new_key = self::_generate_key();

		// Insert the new key
		if (self::_insert_key($new_key, array('level' => $key_details->level, 'ignore_limits' => $key_details->ignore_limits)))
		{
			// Suspend old key
			self::_update_key($old_key, array('level' => 0));

			$this->response(array('status' => 1, 'key' => $new_key), 201); // 201 = Created
		}

		else
		{
			$this->response(array('status' => 0, 'error' => 'Could not save the key.'), 500); // 500 = Internal Server Error
		}
    }

	// --------------------------------------------------------------------

	/* Helper Methods */
	
	private function _generate_key()
	{
		$this->load->helper('security');
		
		do
		{
			$salt = do_hash(time().mt_rand());
			$new_key = substr($salt, 0, config_item('rest_key_length'));
		}

		// Already in the DB? Fail. Try again
		while (self::_key_exists($new_key));

		return $new_key;
	}

	// --------------------------------------------------------------------

	/* Private Data Methods */

	private function _get_key($key)
	{
		return $this->db->where('key', $key)->get(config_item('rest_keys_table'))->row();
	}

	// --------------------------------------------------------------------

	private function _key_exists($key)
	{
		return $this->db->where('key', $key)->count_all_results(config_item('rest_keys_table')) > 0;
	}

	// --------------------------------------------------------------------

	private function _insert_key($key, $data)
	{
		
		$data['key'] = $key;
		$data['date_created'] = function_exists('now') ? now() : time();

		return $this->db->set($data)->insert(config_item('rest_keys_table'));
	}

	// --------------------------------------------------------------------

	private function _update_key($key, $data)
	{
		return $this->db->where('key', $key)->update(config_item('rest_keys_table'), $data);
	}

	// --------------------------------------------------------------------

	private function _delete_key($key)
	{
		return $this->db->where('key', $key)->delete(config_item('rest_keys_table'));
	}
}
