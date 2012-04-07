<?php
require 'config/initialise.php';

$page = (isset($_GET['page'])) ? $_GET['page'] : 'home';

$controllerFile = CONTROLLERS . $page . '.php';

if (file_exists($controllerFile))
{
    include $controllerFile;
} else
{
    include CONTROLLERS . '404.php';
}
?>
