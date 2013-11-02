<?php

class MyApplication extends Application {
	
	public function before_request() {
		//echo 'Called before request!' . '<br/>';
	}

	public function after_request() {
		//echo 'Called after request!' . '<br/>';
	}

	public function app_start() {
		//echo 'app started!'  . '<br/>';
	}
}

?>