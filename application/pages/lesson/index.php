<div id="lesson-panel">
    <div class="block">
        <h2>Text</h2>
        <p>Each of these panels can be rearranged and minimised.</p>
    </div>
    <div class="block">
        <h2>Video</h2>
    </div>
    <div class="block">
        <h2>Audio</h2>
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
<script>
var commandLine = $('#command-line'),
    outputList = $('#console ul');

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
}
</script>
