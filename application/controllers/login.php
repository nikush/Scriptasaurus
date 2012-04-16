<?php
if ($url['action'] == 'logout')
{
    session_destroy();
    //header('Location: /');
}

if (!empty($_POST))
{
    $_SESSION['username'] = $_POST['username'];
}

$breadcrumbs = array(
    'Home' => 'index.php',
    'Login' => ''
);
?>
<?php getHeader(); ?>
<?php include PAGES . 'login/index.php'; ?>
<?php getFooter(); ?>
