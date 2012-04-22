<?php
define('DS', DIRECTORY_SEPARATOR);

define('ROOT', dirname(dirname(__FILE__)) . DS);

define('SITE_ROOT', 'http://' . $_SERVER['SERVER_NAME'] . preg_replace('/(scriptasaurus\/).*$/', '\1', $_SERVER['REQUEST_URI']));

define('ABSPATH', dirname(__FILE__) . '/');
$tempPath1 = explode('/', dirname($_SERVER['SCRIPT_FILENAME']));
$tempPath2 = explode('/', substr(ABSPATH, 0, -1));
$tempPath3 = explode('/', dirname($_SERVER['PHP_SELF']));

// loop over the difference between temp urls
for ($i = count($tempPath1); $i < count($tempPath2); $i++)
{
    // remove last element
    array_pop($tempPath3);
}

// domain name plus trailing path
$urladdr = $_SERVER['HTTP_HOST'] . implode('/', $tempPath3);

// chuck application folder back in, when on localhost
if ($_SERVER['HTTP_HOST'] == 'localhost')
    $urladdr .= '/scriptasaurus';

if ($urladdr{strlen($urladdr) - 1}== '/')
    define('URLADDR', 'http://' . $urladdr);
else
    define('URLADDR', 'http://' . $urladdr . '/');

unset($tempPath1, $tempPath2, $tempPath3, $urladdr);

define('APP', ROOT . 'application' . DS);
define('CONTROLLERS', APP . 'controllers' . DS);
define('PAGES', APP . 'pages' . DS);

define('SITE', ROOT . 'site' . DS);
?>
