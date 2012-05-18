<?php
$map = array(
    'Home' => '',
    'Course' => 'course',
    array(
        'Enrol' => 'enrol',
    )
);

function listMap($map)
{
    foreach ($map as $pageName => $pageAddr)
    {
        if (is_array($pageAddr))
        {
            echo '<ul>';
            listMap($pageAddr);
            echo '</ul>';
        }else
        {
            echo "<li><a href='".URLADDR."$pageAddr'>$pageName</a></li>";
        }
    }
}
?>
<div class="block">
<h1>Site Map</h1>
<ul class="sitemap">
<?php listMap($map); ?>
</ul>
</div>
