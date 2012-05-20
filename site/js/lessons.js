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
        var stuffToUpdate = this.data[this.currentLesson][this.currentStep];
        if ('text' in stuffToUpdate)
        {
            this.updateText(stuffToUpdate.text);
        }
        if ('clear' in stuffToUpdate)
        {
            cmdClear();
        }
    },

    updateText: function(text)
    {
        $(textPanel).html(text);
    },

    data: [
        // lesson 1
        [
            // step 1
            {
                text: '<p>You can create pop up windows in JavaScript to provide important information for the user. For example, if the user is using an old browser that does not support JavaScript, you can alert them in a pop up window to inform that that the current page requires JavaScript. The user can then answer ‘OK’ in that pop up window to confirm that they have read your alert.</p>' + 
                    '<p>Type <code>next</code> to continue.</p>'
            },

            // step 2
            {
                text: '<p>To alert a user just follow the instructions below:</>' +
                    '<ol>' + 
                        '<li>Write the alert keyword</li>' +
                        '<li>Open round brackets - this is what contains the information you want the user to see</li>' +
                        '<li>Write your alert message within quotation marks - this is the message your user will see</li>' +
                        '<li>Close the round brackets</li>' +
                        '<li>End with a semicolon</li>' +
                    '</ol>' + 
                    '<p><code>alert(“hello world!”);</code></p>' + 
                    '<p>Try for yourself in the console!</p>' +
                    '<p>Type <code>next</code> to continue to the test.</p>'
            },

            // step 3
            {
                text: '<p>testing phase</p>',
                clear: 1
            }
        ],

        // lesson 2
        //[
        //]
    ]
};
