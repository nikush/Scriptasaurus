<?php
require 'config/initialise.php';

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

$controllerFile = CONTROLLERS .  $url['controller'] . '.php';

if (file_exists($controllerFile))
{
    include $controllerFile;
} else
{
    include CONTROLLERS . '404.php';
}
?>
