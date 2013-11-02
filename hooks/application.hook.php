<?php

class Utopia extends Application {
	public static $user;
	
	public function before_request() {
		
	}

	public function after_request() {
		if($this->request->utopiaServerVersion ==  null && $this->class != 'KeyController') {
			throw new AuthRequired("Authorization required");
		} else if($this->request->utopiaServerVersion !=  null) {
			self::$user = Token::find_by_key($this->request->utopiaServerVersion)->user;
		}
	}
}

?>