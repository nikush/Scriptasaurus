var Lesson = {
    currentLesson: 0,
    currentStep: -1,

    stepForward: function()
    {
        this.currentStep++;

        if (this.currentStep == this.data[this.currentLesson].length)
        {
            this.currentStep--;
            print('reached final step, cannot proceed any further', true);
            return;
        }

        this.update();
    },

    stepBack: function()
    {
        this.currentStep--;

        if (this.currentStep == -1)
        {
            this.currentStep++;
            print('reached first step, cannot proceed any further', true)
            return;
        }

        this.update();
    },

    update: function()
    {
        var stuffToUpdate = this.getCurrentStep();
        if ('text' in stuffToUpdate)
        {
            this.updateText(stuffToUpdate.text);
        }
        if ('clear' in stuffToUpdate)
        {
            cmdClear();
        }
        if ('print' in stuffToUpdate)
        {
            print(stuffToUpdate.print);
        }
    },

    updateText: function(text)
    {
        $(textPanel).html(text);
    },

    requiredInput: function()
    {
        if ('requireInput' in this.getCurrentStep())
        {
            return true;
        }
        return false;
    },

    validateInput: function(input)
    {
        var step = this.getCurrentStep();
        if (input === step.requireInput)
        {
            print(step.requireSuccessText, true, 'success');
        } else
        {
            print(step.requireFailText, true, 'fail');
        }
    },

    getCurrentStep: function()
    {
        var step = this.data[this.currentLesson][this.currentStep];
        if (step !== undefined) return step;
        return {};
    },

    data: [
        // lesson 1
        [
            // step 1
            {
                text: '<p>You can create pop up windows in JavaScript to provide important information for the user. For example, if a user has joined a discussion forum and another member of that forum has sent them a message, you could alert the user to inform them that they have a new message. The user can then answer ‘OK’ to confirm that they have read your alert.</p>' + 
                    '<p>Type <code>next</code> to continue.</p>'
            },

            // step 2
            {
                text: '<p>To alert a user just follow the instructions below:</>' +
                    '<ol>' + 
                        '<li class="red">Write the alert keyword</li>' +
                        '<li class="blue">Open round brackets - this is what contains the information you want the user to see</li>' +
                        '<li class="green">Write your alert message within quotation marks - this is the message your user will see</li>' +
                        '<li class="blue">Close the round brackets</li>' +
                        '<li class="purple">End with a semicolon</li>' +
                    '</ol>' + 
                    '<p><code><span class="red">alert</span><span class="blue">(</span><span class="green">"hello world!"</span><span class="blue">)</span>;</code></p>' + 
                    '<p>Try for yourself in the console!</p>' +
                    '<p>Type <code>next</code> to continue to the test.</p>'
            },

            // step 3
            {
                text: '<p>testing phase</p>',
                clear: 1,
                print: '<p>Scriptasaurus has a cold! He was sneezing and coughing all morning, and even though he picked all of the oranges from his orange tree and made a gallon of juice it didn’t make him feel any better.</p>' + 
                    '<p>When you see him you must tell him to “go to the doctor”.</p>',
                requireInput: 'alert("go to the doctor");',
                requireSuccessText: 'Scriptasaurus thanks you for your advice and goes to see the doctor',
                requireFailText: 'Scriptasaurus didn’t understand you - let’s try again'
            }
        ],

        // lesson 2
        //[
        //]
    ]
};
