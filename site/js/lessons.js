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
        // introductions {{{
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
                text: '<p>You can create alert boxes in JavaScript to provide important information for the user.</p>' +
'<p>For example, if a user has joined a discussion forum and another member of that forum has sent them a message, you could alert the user to inform them that they have a new message.</p>' +
'<p>The user can then answer ‘OK’ to confirm that they have read your alert.</p>' +
                    '<p>Type <code>next</code> to continue.</p>',
                audio: 'alerts/instructions',
                video: 'alerts/instructions'
            },
            // }}}

            // step 2 {{{
            {
                text: '<p>To alert a user just follow the instructions below:</p>' +
                    '<ol>' + 
                        '<li class="red">Write the alert keyword</li>' +
                        '<li class="blue">Open round brackets - this is what contains the information you want the user to see</li>' +
                        '<li class="green">Write your alert message within quotation marks - this is the message your user will see</li>' +
                        '<li class="blue">Close the round brackets</li>' +
                        '<li class="purple">End with a semicolon</li>' +
                    '</ol>' + 
                    '<p><code><span class="red">alert</span><span class="blue">(</span><span class="green">"hello world!"</span><span class="blue">)</span>;</code></p>' + 
                    '<p>Try for yourself in the console!</p>' +
                    '<p>Type <code>next</code> to continue to the <span class="purple">test</span>.</p>'
            },
            // }}}

            // step 3 {{{
            {
                text: '<p>Scriptasaurus has just logged onto his favourite social networking site. He has some fan mail from you! You would like to be his friend.</p>' +
                    '<p>You must alert him to this - say "I want to be your friend".</p>',
                audio: 'alerts/testing',
                video: 'alerts/testing',
                clear: 1,
                requireInput: 'alert("I want to be your friend");',
                requireSuccessText: 'Scriptasaurus accepts your friend request!',
                requireFailText: 'Scriptasaurus didn\'t understand you - let\'s try again'
            }
            // }}}
        ],
        // }}}

        // confirms {{{
        [
            // step 1 {{{
            {
                text: '<p>You can use a confirm box in JavaScript to check whether a user wants to proceed with a process.<p>' +
'<p>For example, if a user is registering with a website and wants to save their information, you can use a confirm to ask whether they are sure that their information is correct.</p>' + 
'<p>The user can then answer either ‘OK’ to proceed if their information is correct, or, if their information is incorrect, they can select ‘Cancel’ to return to the registration page. </p>' +
                    '<p>Type <code>next</code> to continue.</p>',
                audio: 'confirms/instructions',
                video: 'confirms/instructions'
            },
            // }}}

            // step 2 {{{
            {
                text: '<p>To let a user confirm something just follow the instructions below:</p>' +
                    '<ol>' + 
                        '<li class="red">Write the confirm keyword</li>' +
                        '<li class="blue">Open round brackets - this is what contains the question you want the user to answer</li>' +
                        '<li class="green">Write the question that needs confirmation within quotation marks - this is the message your user will see</li>' +
                        '<li class="blue">Close the round brackets</li>' +
                        '<li class="purple">End with a semicolon</li>' +
                    '</ol>' + 
                    '<p><code><span class="red">confirm</span><span class="blue">(</span><span class="green">"are you sure you want to do that?"</span><span class="blue">)</span>;</code></p>' + 
                    '<p>Try for yourself in the console!</p>' +
                    '<p>Type <code>next</code> to continue to the <span class="purple">test</span>.</p>'
            },
            // }}}

            // step 3 {{{
            {
                text: '<p>Scriptasaurus keeps a weekly blog about his life as a Scriptasaurus. When you go to his blog page you notice that there is a checked option to receive automatic notifications when the blog is updated. You uncheck the option box.</p>' +
'<p>Scriptasaurus asks you to confirm "are you sure that you do not want to follow this blog?"</p>',
                audio: 'confirms/testing',
                video: 'confirms/testing',
                clear: 1,
                requireInput: 'confirm("are you sure that you do not want to follow this blog?");',
                requireSuccessText: 'Scriptasaurus thanks you for answering his question!',
                requireFailText: 'Scriptasaurus didn\'t understand you - let\'s try again'
            }
            // }}}
        ],
        // }}}

        // prompts {{{
        [
            // step 1 {{{
            {
                text: '<p>Prompt boxes are similar to confirm boxes, however the user must enter a value or phrase before they can proceed.</p>' + 
'<p>Once the user has entered some text they may click either ‘OK’ to proceed or ‘Cancel’ to stop the process. If the user presses ‘Cancel’ the text they entered will be returned as “null”.<p>' +
                    '<p>Type <code>next</code> to continue.</p>',
                audio: 'prompts/instructions',
                video: 'prompts/instructions'
            },
            // }}}

            // step 2 {{{
            {
                text: '<p>To prompt a user just follow the instructions below: </p>' +
                    '<ol>' + 
                        '<li class="red">Write the prompt keyword</li>' +
                        '<li class="blue">Open round brackets - this is what contains the question you want the user to answer</li>' +
                        '<li class="green">Write text that requires a returned value within quotation marks - this is the message your user will see</li>' +
                        '<li class="blue">Close the round brackets</li>' +
                        '<li class="purple">End with a semicolon</li>' +
                    '</ol>' + 
                    '<p><code><span class="red">prompt</span><span class="blue">(</span><span class="green">"please enter your name"</span><span class="blue">)</span>;</code></p>' + 
                    '<p>Try for yourself in the console!</p>' +
                    '<p>Type <code>next</code> to continue to the <span class="purple">test</span>.</p>'
            },
            // }}}

            // step 3 {{{
            {
                text: '<p>Scriptasaurus would like you to join his JavaScript forum but he does not know your name.</p>' +
'<p>When he prompts you, asking “what is your name?” you should tell him your name.</p>',
                audio: 'prompts/testing',
                video: 'prompts/testing',
                clear: 1,
                requireInput: 'prompt("what is your name?");',
                requireSuccessText: 'Scriptasaurus welcomes you to his forum',
                requireFailText: 'Scriptasaurus didn\'t understand you - let\'s try again'
            }
            // }}}
        ],
        // }}}

        // strings {{{
        [
            // step 1 {{{
            {
                text: '<p>A string, you may remember, is formed in the following way:</p>' + 
'<p>Once the user has entered some text they may click either ‘OK’ to proceed or ‘Cancel’ to stop the process. If the user presses ‘Cancel’ the text they entered will be returned as “null”.<p>' +
                    '<ol>' + 
                        '<li class="orange">Open quotation marks</li>' +
                        '<li class="purple">Write the string text</li>' +
                        '<li class="orange">Close quotation marks</li>' +
                    '</ol>' + 
                    '<p><span class="orange">"</span><span class="purple">here is some text</span><span class="orange">"</span><p>' +
                    '<p>Type <code>next</code> to continue.</p>',
                audio: 'strings/instructions',
                video: 'strings/instructions'
            },
            // }}}

            // step 2 {{{
            {
	
                text: '<p>Strings can also be added together in JavaScript - this is called concatenation.</p>' +
                '<p>When you are adding multiple strings together you must remember to leave a space before or after the text inside the quotation marks, so that the sentence, for example, is properly spaced when you join the strings together. You can now add as many strings together as you wish!</p>' +
                '<p>To concatenate two strings just follow the instructions below:</p>' +
                    '<ol>' + 
                        '<li class="blue">Write a string</li>' +
                        '<li class="orange">Use a + sign</li>' +
                        '<li class="purple">Write another string</li>' +
                    '</ol>' + 
                    '<p><code><span class="blue">"This sentence uses "</span> <span class="orange">+</span> <span class="purple">"string concatenation."</span></code></p>' + 
                    '<p>Try for yourself in the console!</p>' +
                    '<p>Type <code>next</code> to continue.</p>',
            },
            // }}}

            // step 3 {{{
            {
                text: '<p>You can now use string concatenation in an alert, confirm and prompt!</p>' +
                '<p>To concatenate a string in an alert just follow the instructions below:</p>' +
                    '<ol>' + 
                        '<li class="green">Use the alert keyword</li>' +
                        '<li class="red">Open round brackets</li>' +
                        '<li class="purple">Concatenate two strings</li>' +
                        '<li class="red">Close round brackets</li>' +
                        '<li class="blue">End with a semicolon</li>' +
                    '</ol>' + 
                    '<p><code><span class="green">alert</span><span class="red">(</span><span class="purple">“This alert uses” + “ string concatenation”</span><span class="red">)</span><span class="blue">;</span></code></p>' + 
                    '<p>Try for yourself in the console!</p>' +
                    '<p>Type <code>next</code> to continue to the <span class="purple">test</span>.</p>'
            },
            // }}}

            // step 4 {{{
            {
                text: '<p>Scriptasaurus is doing some online shopping because he has hurt his leg and can not walk to the shops. He needs to remember some items on his shopping list, and be alerted to those items as he completes his online shop.</p>' +
                '<p>Scriptasaurus needs “an apple” first and “a jammy doughnut” second.</p>' +
                '<p>Alert Scriptasaurus to his shopping list, tell him: <br/>“Buy” followed by the first item in his shopping list, then use the word “and” followed by the second item in his shopping list.</p>',
                audio: 'strings/testing',
                video: 'strings/testing',
                clear: 1,
                requireInput: 'alert("Buy " + "an apple " + "and " + "a jammy doughnut");',
                requireSuccessText: 'Scriptasaurus successfully completes his online shop',
                requireFailText: 'Scriptasaurus didn\'t understand you - let\'s try again'
            }
            // }}}
        ],
        // }}}

        // prompt \w alert {{{
        [
            // step 1 {{{
            {
                text: '<p>As we mentioned before, prompts allow a user to enter a value.</p>' +
                        '<p>If a user enters a value in a prompt window and then selects ‘OK’ we can then use that value in an alert.</p>' +
                        '<p>Prompt strings written inside an alert will be read before alert strings. As a result, the alert string text can then be concatenated with the prompt reply.</p>' +
                        '<p>The prompt, it is important to note, stores not only the prompt question string, but also the user’s reply should they have returned a value and selected OK. </p>' +
                    '<p>Type <code>next</code> to continue.</p>',
                audio: 'promptsAlerts/instructions',
                video: 'promptsAlerts/instructions'
            },
            // }}}

            // step 2 {{{
            {
                text: '<p>To prompt with a string just follow the instructions below:</p>' +
                    '<ol>' + 
                        '<li class="red">Write the alert keyword</li>' +
                        '<li class="blue">Open round brackets for the alert</li>' +
                        '<li class="green">Write an alert string which will later be concatenated with the user reply</li>' +
                        '<li class="orange">Use the + sign</li>' +
                        '<li class="purple">Write the prompt keyword</li>' +
                        '<li class="orange">Open round brackets for the prompt</li>' +
                        '<li class="green">Write a prompt question string</li>' +
                        '<li class="orange">Close round brackets for the prompt</li>' +
                        '<li class="blue">Close round brackets for the alert</li>' +
                        '<li class="red">End with a semicolon</li>' +
                    '</ol>' + 
                    '<p><code><span class="red">alert</span><span class="blue">(</span><span class="green">“hello ”</span> <span class="orange">+</span> <span class="purple">prompt</span><span class="orange">(</span><span class="green">“what is your name?”</span><span class="orange">)</span><span class="blue">)</span><span class="red">;</span></code></p>' + 
                    '<p>Try for yourself in the console!</p>' +
                    '<p>Type <code>next</code> to continue.</p>',
            },
            // }}}

            // step 3 {{{
            {
                text: '<p>Scriptasaurus has made a rap music video about JavaScript. When you comment on his video to say it is brilliant, Scriptasaurus writes to you. He wants to prompt you to ask if you would like to rap about JavaScript together some time.</p>' +
                '<p>Scriptasaurus must prompt you to ask “Do you want to rap about JavaScript with me?” After you have given Scriptasaurus an answer he must alert you to say “ You answered” with your prompt answer.</p>',
                audio: 'strings/testing',
                video: 'strings/testing',
                clear: 1,
                requireInput: 'alert("You answered " + prompt("Do you want to rap about JavaScript with me?"));',
                requireSuccessText: 'Scriptasaurus thanks you for answering his question!',
                requireFailText: 'Scriptasaurus didn\'t understand you - let\'s try again'
            }
            // }}}
        ],
        // }}}
    ]
};
