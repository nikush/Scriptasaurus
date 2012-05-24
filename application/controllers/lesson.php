<?php
$breadcrumbs = array(
    'Home' => '',
    'Account' => 'account',
    'Lesson 1' => null
);
$learnerStyle = (!is_null($url['action'])) ? $url['action'] : getLearnerStyle();
?>
<?php getHeader(); ?>
<div class="main">
    <?php include PAGES . 'lesson/index.php'; ?>
</div>
<?php getFooter(); ?>
