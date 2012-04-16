<?php
require 'config/initialise.php';

//$page = (isset($_GET['page'])) ? $_GET['page'] : 'home';
$urlStr = (isset($_GET['url'])) ? trim($_GET['url'], '/') : 'home';

$urlChunks = explode('/', $urlStr);

$url = array();
$url['controller'] = $urlChunks[0];
$url['action'] = null;
$url['params'] = null;

if (isset($urlChunks[1]))
{
    $url['action'] = $urlChunks[1];
}

print_r($url);

die($urlStr);

$controllerFile = CONTROLLERS . $page . '.php';

if (file_exists($controllerFile))
{
    include $controllerFile;
} else
{
    include CONTROLLERS . '404.php';
}
?>
