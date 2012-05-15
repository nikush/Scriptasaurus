<?php
$map = array(
    'Home' => '',
    'Course' => 'course',
    array(
        'Test Subpage' => 'subpage'
    )
);

function listMap($map)
{
    foreach ($map as $pageName => $pageAddr)
    {
        echo '<li>';
        if (is_array($pageAddr))
        {
            echo '<ul>';
            listMap($pageAddr);
            echo '</ul>';
        }else
        {
            echo "<a href='".URLADDR."$pageAddr'>$pageName</a>";
        }
        echo '</li>';
    }
}
?>
<div class="block">
<h1>Site Map</h1>
<u class="sitemap">
<?php listMap($map); ?>
</ul>
</div>
