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
                text: '<p>some text</p>'
            },

            // step 2
            {
                text: '<p>some more text</p>'
            },

            // step 3
            {
                text: '<p>even more text</p>'
            }
        ],

        // lesson 2
        //[
        //]
    ]
};
