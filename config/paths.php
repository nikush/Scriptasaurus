<?php
define('DS', DIRECTORY_SEPARATOR);

define('ROOT', dirname(dirname(__FILE__)) . DS);

define('SITE_ROOT', 'http://' . $_SERVER['SERVER_NAME'] . preg_replace('/(scriptasaurus\/).*$/', '\1', $_SERVER['REQUEST_URI']));

define('APP', ROOT . 'application' . DS);
define('CONTROLLERS', APP . 'controllers' . DS);
define('PAGES', APP . 'pages' . DS);

define('SITE', ROOT . 'site' . DS);
?>
