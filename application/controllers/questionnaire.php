<?php
$breadcrumbs = array(
    'Home' => '',
    'Enrol' => 'enrol',
    'Questionnaire' => null
);
?>
<?php getHeader(); ?>
<section class="right-bar">
<?php include PAGES . 'live-feed.php'; ?>
</section>
<div class="main fluid">
<?php include PAGES . 'questionnaire/index.php'; ?>
</div>
<?php getFooter(); ?>
