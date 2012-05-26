<div id="lesson-panel">
<?php $panelCollapsed = false; ?>
<?php switch ($learnerStyle)
{
    case 'auditory' :
        include PAGES . 'lesson/panel-auditory.php';
        include PAGES . 'lesson/panel-text.php';
        $panelCollapsed = true;
        include PAGES . 'lesson/panel-video.php';
    break;

    case 'kinesthetic' :
        include PAGES . 'lesson/panel-text.php';
        $panelCollapsed = true;
        include PAGES . 'lesson/panel-auditory.php';
        include PAGES . 'lesson/panel-video.php';
    break;

    default:
    case 'visual' :
        include PAGES . 'lesson/panel-video.php';
        include PAGES . 'lesson/panel-text.php';
        $panelCollapsed = true;
        include PAGES . 'lesson/panel-auditory.php';
    break;
}
?>
</div>
<div class="block lesson-fluid">
    <div id="console">
        <ul>
            <li class="purple">Welcome to the Scriptasaurus coding console!</li>
        </ul>
        <input type="text" id="command-line" autofocus />
    </div>
</div>
<script src="<?php echo URLADDR; ?>site/js/jquery-1.7.2.min.js"></script>
<script src="<?php echo URLADDR; ?>site/js/lessons.js"></script>
<!-- jPlayer -->
<link href="<?php echo URLADDR; ?>site/js/jPlayer/blue.monday/jplayer.blue.monday.css" rel="stylesheet">
<script src="<?php echo URLADDR; ?>site/js/jPlayer/jquery.jplayer.js"></script>
<script>
$('#jquery_jplayer_1').jPlayer({
    ready: function(){
        $(this).jPlayer("setMedia", {
            m4a: "<?php echo URLADDR; ?>site/assets/Louder.m4a",
        });
    },
    supplied: "m4a"
});
</script>
<script>
var commandLine = $('#command-line'),
    outputList = $('#console ul'),
    textPanel = $('#lesson-text .updateable'),
    appCommands = {
        next: cmdNext,
        back: cmdBack,
        clear: cmdClear,
        help: cmdHelp
    };

$('.panel-control').click(function() {
    var control = this,
        content = $(this).parent().next(),
        contentHidden = $(content).hasClass('hidden');

    $(content).toggleClass('hidden');

    if (contentHidden) {
        $(control).html('-');
    } else {
        $(control).html('+');
    }
});

$(commandLine).keydown(execute);

function execute(e)
{
    if (e.keyCode === 13)
    {
        var command = $(commandLine).val();
        $(commandLine).val('');
        print(command);

        try
        {
            if (command in appCommands)
            {
                var func = appCommands[command];
                func();
                return;
            }
            var result = eval(command);
            if (result !== undefined) print(result, true);

            if (Lesson.requiredInput())
            {
                Lesson.validateInput(command);
            }
        } catch(e)
        {
            print(e.message, true, 'fail');
        }
    }
}

function print(text, outputClass, additionalClasses)
{
    outputClass = outputClass ? outputClass : false;

    var li = $('<li>' + text + '</li>');
    if (outputClass) $(li).addClass('output');
    if (additionalClasses) $(li).addClass(additionalClasses);
    $(outputList).append(li);

    $(outputList).scrollTop(99999);
}

function cmdNext()
{
    Lesson.stepForward();
}
function cmdBack()
{
    Lesson.stepBack();
}
function cmdClear()
{
    $(outputList).empty();
}
function cmdHelp()
{
    print('show help', true);
}
</script>