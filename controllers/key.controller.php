<?php

class KeyController extends BaseController {

    /**
     * Base method
     * @return Read it through!
     */
    public function index_get() {
        return 'An an an, you did not say the magic word!';
    }

    /**
     * Creates a new key
     * @param  POST - username, password 
     * @return 40 digit md5 hash
     */
    public function index_post()
    {
        $key = self::_generate_key();
        $username = $this->post('username');
        $password = $this->post('password');
        $options['conditions'] = array('user_name = ? AND password = ?', $username, $password);
        $user = User::first($options);
        self::_insert_key($key, $user);
        return $key;
    }

    /**
     * Deletes a key
     * @param  md5 hash $key
     * @return boolean
     */
    public function index_delete($key)
    {
        // Kill it
        self::_delete_key($key);
        // Tell em we killed it
        return "API key deleted successfully";
    }

    /**
     * helper method to generate the key
     * @return [type]
     */
    private function _generate_key()
    {
        do
        {
            $salt = md5(time().mt_rand());
            $new_key = substr($salt, 0, 40);
        }
        // Already in the DB? Fail. Try again
        while(self::_key_exists($new_key));
        return $new_key;
    }

    /**
     * helper method for finding the key in database
     * @param  $key
     * @return key
     */
    private function _get_key($key)
    {
        return Token::find_by_key($key);
    }

    /**
     * name suffices it
     * @param  $key
     * @return key
    */
    private function _key_exists($key)
    {
        return count(Token::find_by_key($key)) > 0;
    }

    /**
     * name suffices it
     * @param  $key
     * @return key
    */
    private function _insert_key($key, $user)
    {
        $data = new Token();
        $data->key = $key;
        $data->user_id = $user->id;
        $data->date_created = now();
        $data->save();
        return $data;
    }

    /**
     * name suffices it
     * @param  $key
     * @return key
    */
    private function _delete_key($key)
    {
        $token = Token::find_by_key($key);
        return $token->delete();
    }
}