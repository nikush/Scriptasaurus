<?php
define('DS', DIRECTORY_SEPARATOR);

define('ROOT', dirname(dirname(__FILE__)) . DS);

define('SITE_ROOT', 'http://' . $_SERVER['SERVER_NAME'] . preg_replace('/(scriptasaurus\/).*$/', '\1', $_SERVER['REQUEST_URI']));

define('ABSPATH', dirname(__FILE__) . '/');
$tempPath1 = explode('/', dirname($_SERVER['SCRIPT_FILENAME']));
$tempPath2 = explode('/', substr(ABSPATH, 0, -1));
$tempPath3 = explode('/', dirname($_SERVER['PHP_SELF']));

echo '1: ' . dirname($_SERVER['SCRIPT_FILENAME']);
echo '<pre>';
print_r($tempPath1);
echo '</pre>';

echo '2: ' . __FILE__;
echo '<pre>';
print_r($tempPath2);
echo '</pre>';

echo '3: ' . dirname($_SERVER['PHP_SELF']);
echo '<pre>';
print_r($tempPath3);
echo '</pre>';

// loop over the difference between temp urls
for ($i = count($tempPath1); $i < count($tempPath2); $i++)
{
    // remove last element
    array_pop($tempPath3);
}

$urladdr = $_SERVER['HTTP_HOST'] . implode('/', $tempPath3);
echo $urladdr;

if ($urladdr{strlen($urladdr) - 1}== '/')
    define('URLADDR', 'http://' . $urladdr);
else
    define('URLADDR', 'http://' . $urladdr . '/');

echo '<br>';
echo URLADDR;

unset($tempPath1, $tempPath2, $tempPath3, $urladdr);

exit();

define('APP', ROOT . 'application' . DS);
define('CONTROLLERS', APP . 'controllers' . DS);
define('PAGES', APP . 'pages' . DS);

define('SITE', ROOT . 'site' . DS);
?>
