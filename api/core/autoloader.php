<?php

/**
 * Load absolutely required files from only-REST
 */
require LIBPATH .'/helpers.php';
require LIBPATH .'/request.php';
require LIBPATH .'/response.php';
require LIBPATH .'/application.php';
require LIBPATH .'/base.controller.php';
require LIBPATH .'/documentor.php';
require LIBPATH .'/orm/Activerecord.php';


/**
 * Start loading application files!
 */
load(CONFIG);
load(MODELS);
load(CONTROLLERS);
load(HOOKS);
load(LIBRARIES);

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