<?php
$map = array(
    'Home' => '',
    'Course' => 'course',
    array(
        'Course' => 'course',
        'Test Subpage' => 'subpage',
        array(
            'Sub-sub-page' => 'subsubpage'
        )
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
