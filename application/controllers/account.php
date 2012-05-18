<?php
$breadcrumbs = array(
    'Home' => '',
    'Account' => null
);
?>
<?php getHeader(); ?>
<section class="right-bar">
    <div class="block">
        <h3>Tutor is online</h3>
        <a href="#">Chat now!</a>
    </div>
    <?php include PAGES . 'live-feed.php'; ?>
</section>
<div class="main">
    <?php include PAGES . 'account/index.php'; ?>
</div>
<?php getFooter(); ?>
