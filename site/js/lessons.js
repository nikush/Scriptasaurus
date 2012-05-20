var Lesson = {
    currentLesson: 0,
    currentStep: -1,

    stepForward: function()
    {
        this.currentStep++;
        this.update();
    },

    stepBack: function()
    {
        this.currentStep--;
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
            },

            // step 3
            {
            }
        ],

        // lesson 2
        [
        ]
    ]
};
