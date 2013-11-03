<?php

class Utopia extends Application {
	public static $user;
	
	public function before_request() {
		
	}

	public function after_request() {
		/**
		 * Token is not present but he's trying to get it!
		 * @var [type]
		 */
		if($this->request->utopiaServerVersion ==  null && $this->class != 'KeyController') {
			throw new AuthRequired("Authorization required");
		} 
		/**
		 * Token is present, check for user if not there throw an exception
		 */
		else if($this->request->utopiaServerVersion !=  null) {
			if($token  = Token::find_by_key($this->request->utopiaServerVersion)) {
				self::$user = $token->user;	
			} else {
				throw new AuthRequired("Token not present");
			}
		} 
		/**
		 * If both of two failed means something is wrong, don't let the request pass through
		 */
		else {
			throw new AuthRequired("Token not present");
		}
	}
}

?>