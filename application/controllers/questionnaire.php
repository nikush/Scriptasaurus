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
<?php if (array_key_exists('username', $_POST)) : ?>
<?php $_SESSION['username'] = ($_POST['username'] != '') ? $_POST['username'] : 'User123'; ?>
<?php include PAGES . 'questionnaire/index.php'; ?>
<?php else: ?>
<?php
$visual = array_key_exists('visual', $_POST) ? count($_POST['visual']) : 0;
$audio = array_key_exists('audio', $_POST) ? count($_POST['audio']) : 0;
$kinesthetic = array_key_exists('kinesthetic', $_POST) ? count($_POST['kinesthetic']) : 0;

$highestScore = $visual;
$learnerStyle = 'visual';

if ($audio > $highestScore)
{
    $highestScore = $audio;
    $learnerStyle = 'audio';
}
if ($kinesthetic > $highestScore)
{
    $highestScore = $kinesthetic;
    $learnerStyle = 'kinesthetic';
}
$_SESSION['learner_style'] = $learnerStyle;
?>
<div class="block">
<h1>Result: <span class="purple"><?php echo $learnerStyle; ?></span> learner</h1>
    <p>You are a <span class="purple"><?php echo $learnerStyle; ?></span> learner! Your course will be customised to reflect your preferred learning style.</p>
</div>
<?php endif; ?>
</div>
<?php getFooter(); ?>
