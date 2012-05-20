<div id="lesson-panel">
    <div class="block" id="lesson-text">
        <h2>Text</h2>
        <div class="updateable">
            <h3>Commands</h3>
            <ul>
                <li><code>next</code> : step forward in lesson</li>
                <li><code>previous</code> : step back in lesson</li>
                <li><code>clear</code> : clear the console</li>
            </ul>
            <p>To begin, type <code>'next'</code> then hit enter.</p>
        </div>
    </div>
    <div class="block" id="lesson-video">
        <h2>Video</h2>
        <p>Each of these panels can be rearranged and collapsed.</p>
    </div>
    <div class="block" id="lesson-audio">
        <h2>Audio</h2>
        <p>Each of these panels can be rearranged and collapsed.</p>
    </div>
</div>
<div class="block lesson-fluid">
    <div id="console">
        <ul>
            <li>Welcome to the Scriptasaurus coding console!</li>
            <li class="output">This is some example output</li>
        </ul>
        <input type="text" id="command-line" autofocus />
    </div>
</div>
<script src="<?php echo URLADDR; ?>site/js/jquery-1.7.2.min.js"></script>
<script src="<?php echo URLADDR; ?>site/js/lessons.js"></script>
<script>
var commandLine = $('#command-line'),
    outputList = $('#console ul'),
    textPanel = $('#lesson-text .updateable'),
    appCommands = {
        next: cmdNext,
        previous: cmdPrevious,
        clear: cmdClear,
        help: cmdHelp
    };

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
        } catch(e)
        {
            print(e.message, true);
        }
    }
}

function print(text, outputClass)
{
    outputClass = outputClass ? outputClass : false;

    var li = $('<li>' + text + '</li>');
    if (outputClass) $(li).addClass('output');
    $(outputList).append(li);

    $(outputList).scrollTop(99999);
}

function cmdNext()
{
    Lesson.stepForward();
}
function cmdPrevious()
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
