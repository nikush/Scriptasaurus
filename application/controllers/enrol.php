<?php
$breadcrumbs = array(
    'Home' => 'index.php',
    'Enrol' => ''
);
?>
<?php getHeader(); ?>
<section class="right-bar">
<?php include PAGES . 'live-feed.php'; ?>
</section>
<div class="main fluid">
<?php include PAGES . 'enrol/index.php'; ?>
</div>
<?php getFooter(); ?>
