<?php

class ProjectControllerTest extends PHPUnit_Framework_TestCase {
	public function testTrueIsTrue()
	{
	    $foo = new DefaultController();
	    $this->assertTrue($foo->index_get());
	}
}