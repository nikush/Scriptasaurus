<?php
// header is retrieved by a function, so the scope of breadcrumbs changes
global $breadcrumbs;
if (!isset($breadcrumbs))
{
    $breadcrumbs = array('Home' => null);
}
?>
<!DOCTYPE html>
<html lang="en_GB">
    <head>
        <meta charset="utf-8" />
        <title>Scriptasaurus</title>
        <link rel="stylesheet" href="<?php echo URLADDR; ?>site/css/bootstrap.css" />
        <link rel="stylesheet" href="<?php echo URLADDR; ?>site/css/style.css" />
    </head>
    <body>
        <header>
            <div class="container">
                <h1>Scriptasaurus</h1>
            </div>
            <nav class="block clearfix">
                <ul class="pull-left breadcrumbs">
<?php foreach ($breadcrumbs as $k => $v) : ?>
<?php   if ($v !== null) : ?>
    <?php $v = URLADDR . $v; ?>
                    <li><a href="<?php echo $v; ?>"><?php echo $k; ?></a></li>
<?php   else : ?>
                    <li><?php echo $k; ?></li>
<?php   endif; ?>
<?php endforeach; ?>
                </ul>
                <ul>
<?php if (isLoggedIn()) : ?>
                    <li><a href="<?php echo URLADDR; ?>account"><?php echo getUser(); ?></a></li>
                    <li><a href="<?php echo URLADDR; ?>login/logout">Log Out</a></li>
<?php else : ?>
                    <li><a href="<?php echo URLADDR; ?>login">Log In</a></li>
<?php endif; ?>
                </ul>
            </nav>
        </header>
        <div class="content-container">
