<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();

require 'paths.php';

function getHeader()
{
    include PAGES . 'header.php';
}

function getFooter()
{
    include PAGES . 'footer.php';
}
?>
