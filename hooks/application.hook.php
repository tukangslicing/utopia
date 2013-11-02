<?php

class MyApplication extends Application {
	
	public function before_request() {
		
	}

	public function after_request() {
		if($this->request->utopiaServerVersion ==  null && $this->class != 'KeyController') {
			throw new AuthRequired("Authorization required");
		}
	}
}

?>