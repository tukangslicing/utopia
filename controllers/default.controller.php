<?php

class DefaultController extends BaseController {
	public function index_get() {
		return now();
	}
	
	public function index_post() {
		return 'Hello ' . $this->post('name') . '!';
	}

	public function index_put() {
		return 'Hello ' . $this->put('name') . '!';
	}
	
	public function index_delete() {
		return 'Hello ' . $this->delete('name') . '!';
	}
}
