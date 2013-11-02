<?php

require LIBPATH .'/helpers.php';
require LIBPATH .'/request.php';
require LIBPATH .'/response.php';
require LIBPATH .'/application.php';
require LIBPATH .'/base.controller.php';
require LIBPATH .'/orm/Activerecord.php';

load(CONFIG);
load(MODELS);
load(CONTROLLERS);
load(HOOKS);

require LIBPATH .'/database.php';

function load($dir) {
	foreach (scandir($dir) as $filename) {
	    $path =  $dir . '/' . $filename;
	    if (is_file($path)) {
	        require $path;
	    }
	}	
}

?>