<?php
$breadcrumbs = array(
    'Home' => '',
    'Account' => null
);
?>
<?php getHeader(); ?>
<section class="right-bar">
    <?php include PAGES . 'live-feed.php'; ?>
</section>
<div class="main">
    <?php include PAGES . 'account/index.php'; ?>
</div>
<?php getFooter(); ?>
