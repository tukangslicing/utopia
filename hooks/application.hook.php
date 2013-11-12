<?php

class Utopia extends Application {
	public static $user;
	
	public function before_request() {
		
	}

	public function after_request() {
		/**
		 * Token is not present, and request is not for KeyController!
		 * @var [type]
		 */
		if($this->class != 'SpecsController') {
			if($this->request->utopiaServerVersion == null) {
				throw new AuthRequired("Authorization required");	
			}
			$token  = Token::find_by_key($this->request->utopiaServerVersion);
			self::$user = $token->user;
		} 
		/**
		 * Request for KeyController, 
		 * check whether he wants a key or wants to delete it!
		 * TODO: simplify this complex if condition
		 */
		else if ($this->class_method == 'index_delete') {
			if($token  = Token::find_by_key($this->request->utopiaServerVersion)) {
				self::$user = $token->user;	
			} else {
				throw new AuthRequired("Token not present");
			}
		} 
	}
}

?>