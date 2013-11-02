<?php

class DefaultController extends BaseController {
	public function index_get() {
		return "Welcome to only-REST! This response is coming from Controllers#DefaultController#index_get method!";
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

	public function greet_get() {
		return DefaultModel::greet_me();
	}
}
