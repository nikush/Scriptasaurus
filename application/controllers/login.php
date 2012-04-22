<?php
if ($url['action'] == 'logout')
{
    session_destroy();
    header('Location: ' . URLADDR);
}

if (!empty($_POST))
{
    $_SESSION['username'] = $_POST['username'];
    header('Location: ' . URLADDR);
}

$breadcrumbs = array(
    'Home' => '',
    'Login' => null
);
?>
<?php getHeader(); ?>
<?php include PAGES . 'login/index.php'; ?>
<?php getFooter(); ?>
