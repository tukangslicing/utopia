<?php
if (!defined('PHP_VERSION_ID') || PHP_VERSION_ID < 50300)
	die('only-REST requires PHP 5.3 or higher');

// error_reporting(E_ERROR);
date_default_timezone_set("UTC");

define('OR_VERSION', "0.1");
define('BASEPATH', dirname(__FILE__));
define('LIBPATH', dirname(__FILE__) . '/core');
define('MODELS', dirname(__FILE__) . '/models');
define('CONTROLLERS', dirname(__FILE__) . '/controllers');
define('CONFIG', dirname(__FILE__) . '/config');
define('HOOKS', dirname(__FILE__) . '/hooks');
define('LIBRARIES', dirname(__FILE__) . '/libraries');

require LIBPATH . '/autoloader.php';

$app = new Utopia();
$app->init();

?>