<div class="block">
    <h1>Lesson 1</h1>
    <h2>Console</h2>
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
