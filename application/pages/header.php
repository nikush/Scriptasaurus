<?php
if (!isset($breadcrumbs))
{
    $breadcrumbs = array('Home' => '');
}
?>
<!DOCTYPE html>
<html lang="en_GB">
    <head>
        <meta charset="utf-8" />
        <title>Scriptasaurus</title>
        <link rel="stylesheet" href="site/css/bootstrap.css" />
        <link rel="stylesheet" href="site/css/style.css" />
    </head>
    <body>
        <header>
            <div class="container">
                <h1>Scriptasaurus</h1>
            </div>
            <nav class="block clearfix">
                <ul class="pull-left breadcrumbs">
<?php foreach ($breadcrumbs as $k => $v) : ?>
<?php   if ($v != '') : ?>
                    <li><a href="<?php echo $v; ?>"><?php echo $k; ?></a></li>
<?php   else : ?>
                    <li><?php echo $k; ?></li>
<?php   endif; ?>
<?php endforeach; ?>
                </ul>
                <ul>
                    <li><a href="login">Log In</a></li>
                    <li><a href="account">Your Account</a></li>
                </ul>
            </nav>
        </header>
        <div class="content-container">
