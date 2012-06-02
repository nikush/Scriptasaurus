var Lesson = {
    currentLesson: 0,
    currentStep: -1,

    stepForward: function()
    {
        this.currentStep++;

        if (this.currentStep == this.data[this.currentLesson].length)
        {
            this.currentStep--;
            this.lessonForward();
            this.update();
            return;
        }

        this.update();
    },

    stepBack: function()
    {
        this.currentStep--;

        if (this.currentStep <= 0)
        {
            this.currentStep++;
            this.lessonBack();
            this.update();
            return;
        }

        this.update();
    },

    lessonForward: function()
    {
        this.currentLesson++;
        if (this.currentLesson == this.data.length)
        {
            this.currentLesson--;
            print('reached end', true);
        } else
        {
            this.currentStep = 0;
        }
    },

    lessonBack: function()
    {
        this.currentLesson--;
        if (this.currentLesson === -1)
        {
            this.currentLesson++;
            print('reached beginning', true);
        } else
        {
            this.currentStep = this.data[this.currentLesson].length - 1;
        }
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
        if ('audio' in stuffToUpdate)
        {
            this.updateAudio(stuffToUpdate.audio);
        }
        if ('video' in stuffToUpdate)
        {
            this.updateVideo(stuffToUpdate.video);
        }
    },

    updateText: function(text)
    {
        $(textPanel).html(text);
    },

    updateAudio: function(audio)
    {
        var base_url = window.location.href.replace("lesson", ""),
            file = base_url + "site/assets/lesson1/" + audio + ".mp3";
        $("#jquery_jplayer_1").jPlayer("clearMedia");
        $("#jquery_jplayer_1").jPlayer("setMedia", {
            mp3: file
        });
    },

    updateVideo: function(video)
    {
        var base_url = window.location.href.replace("lesson", ""),
            file = base_url + "site/assets/lesson1/" + video + ".m4v";
        $("#jquery_jplayer_2").jPlayer("clearMedia");
        $("#jquery_jplayer_2").jPlayer("setMedia", {
            m4v: file
        });
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
        // introduction {{{
        [
            // step 1 {{{
            {
                text: '<p>JavaScript is an Object-Based Programming language. An object is simply a special kind of data that has its own properties and methods. We will explore these properties and methods more fully in lesson two of this course.</p>' + 
                '<p>JavaScript is used with HTML and CSS to create dynamic websites. Check out our Scriptasaurus live feed and forum for information about our brand new HTML, CSS and JavaScript course, the follow on for this beginner JavaScript course. </p>' + 
                '<p>JavaScript adds dynamic elements to a website. It is used, for example, to aid the user registration process by checking information the user has entered and sending or saving form data.</p>' + 
                '<p>This course is divded into ten lessons which are designed to build on your knowledge and test you throughout and at the end of each lesson. Lesson ten of this course will test your knowledge of the entire course content.</p>' + 
                '<p>In this first lesson we will be covering the basics of the JavaScript programming language, including alerts, confirms, prompts, strings, string concatenation and prompts with alerts.</p>' + 
                    '<p>Type <code>next</code> to continue.</p>',
                audio: 'intro/intro',
                video: 'intro/intro'
            },
            // }}}
        ],
        // }}}

        // alerts {{{
        [
            // step 1 {{{
            {
                text: '<p>You can create pop up windows in JavaScript to provide important information for the user. For example, if a user has joined a discussion forum and another member of that forum has sent them a message, you could alert the user to inform them that they have a new message. The user can then answer ‘OK’ to confirm that they have read your alert.</p>' + 
                    '<p>Type <code>next</code> to continue.</p>',
                audio: 'alerts/instructions',
                video: 'alerts/instructions'
            },
            // }}}

            // step 2 {{{
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
            // }}}

            // step 3 {{{
            {
                text: '<p>testing phase</p>',
                clear: 1,
                print: '<p>Scriptasaurus has a cold! He was sneezing and coughing all morning, and even though he picked all of the oranges from his orange tree and made a gallon of juice it didn’t make him feel any better.</p>' + 
                    '<p>When you see him you must tell him to “go to the doctor”.</p>',
                requireInput: 'alert("go to the doctor");',
                requireSuccessText: 'Scriptasaurus thanks you for your advice and goes to see the doctor',
                requireFailText: 'Scriptasaurus didn’t understand you - let’s try again'
            }
            // }}}
        ],
        // }}}
    ]
};
