<?php

define('CONNECTION_STRING', 'mysql://' . DB_USERNAME . ':' . DB_PASSWORD . '@' . DB_HOSTNAME . ':' . DB_PORT . '/' . DB_DATABASE);

ActiveRecord\Config::initialize(function($cfg)
{
    $cfg->set_model_directory(MODELS);
    $cfg->set_connections(array(
        'development' => CONNECTION_STRING));
    
    $cfg->set_default_connection('development');
});

?>