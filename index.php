<?php
require 'config/initialise.php';

$page = (isset($_GET['page'])) ? $_GET['page'] : 'home';

$controllerFile = 'application/controllers/' . $page . '.php';

if (file_exists($controllerFile))
{
    include $controllerFile;
} else
{
    include 'application/controllers/404.php';
}
?>
