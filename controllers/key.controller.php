<?php

class KeyController extends BaseController {

    public function index_get() {
        return 'An an an, you did not say the magic word!';
    }

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

    public function index_delete($key)
    {
        // Kill it
        self::_delete_key($key);
        // Tell em we killed it
        return "API key deleted successfully";
    }

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

    private function _get_key($key)
    {
        return Token::find_by_key($key);
    }

    private function _key_exists($key)
    {
        return count(Token::find_by_key($key)) > 0;
    }

    private function _insert_key($key, $user)
    {
        $data = new Token();
        $data->key = $key;
        $data->user_id = $user->id;
        $data->date_created = now();
        $data->save();
        return $data;
    }

    private function _delete_key($key)
    {
        $token = Token::find_by_key($key);
        return $token->delete();
    }
}