<?php
$breadcrumbs = array(
    'Home' => '',
    'Course' => null
);
?>
<?php getHeader(); ?>
<section class="right-bar">
    <?php include PAGES . 'live-feed.php'; ?>
</section>
<div class="main">
    <?php include PAGES . 'course/index.php'; ?>
</div>
<?php getFooter(); ?>
