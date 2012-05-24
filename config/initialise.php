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

function isLoggedIn()
{
    return isset($_SESSION['username']);
}

function getUser()
{
    return isset($_SESSION['username']) ? $_SESSION['username'] : null;
}

function getLearnerStyle()
{
    return isset($_SESSION['learner_style']) ? $_SESSION['learner_style'] : 'visual';
}
?>
