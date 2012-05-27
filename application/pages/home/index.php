<section id="main-content" class="fluid block">
    <h1>Hello and welcome to <span class="purple">Scriptasaurus!</span></h1>
    <p>Hello and welcome to Scriptasaurus! Home to the often misunderstood, and frequently feared scripting giant - JavaScript: a dynamic scripting language used in almost every current website.</p>
    <p>Through a series of fun, friendly and simple steps we will guide you through the wonderful world of JavaScript. And the end goal? Become a JavaScript pro: a true Scriptasaurus.</p>
    <p>The course programme is designed specifically around you: set at your preferred pace and modified to reflect your most efficient learning style. So that with scriptasaurus.com you are guaranteed to learn in your most comfortable, productive and time-efficient manner.</p>
    <p>Please note that this course is aimed at absolute beginners with no previous experience in coding. 
After all a Scriptasaurus isn’t born - <span class="purple">he is compiled</span>.</p>

            <div id="jp_container_1" class="jp-video ">
                <div class="jp-type-single">
                  <div id="jquery_jplayer_1" class="jp-jplayer"></div>
                  <div class="jp-gui">
                    <div class="jp-video-play">
                      <a href="javascript:;" class="jp-video-play-icon" tabindex="1">play</a>
                    </div>
                    <div class="jp-interface">
                      <div class="jp-progress">
                        <div class="jp-seek-bar">
                          <div class="jp-play-bar"></div>
                        </div>
                      </div>
                      <div class="jp-current-time"></div>
                      <div class="jp-duration"></div>
                      <div class="jp-controls-holder">
                        <ul class="jp-controls">
                          <li><a href="javascript:;" class="jp-play" tabindex="1">play</a></li>
                          <li><a href="javascript:;" class="jp-pause" tabindex="1">pause</a></li>
                          <li><a href="javascript:;" class="jp-stop" tabindex="1">stop</a></li>
                          <li><a href="javascript:;" class="jp-mute" tabindex="1" title="mute">mute</a></li>
                          <li><a href="javascript:;" class="jp-unmute" tabindex="1" title="unmute">unmute</a></li>
                          <li><a href="javascript:;" class="jp-volume-max" tabindex="1" title="max volume">max volume</a></li>
                        </ul>
                        <div class="jp-volume-bar">
                          <div class="jp-volume-bar-value"></div>
                        </div>
                        <ul class="jp-toggles">
                          <li><a href="javascript:;" class="jp-full-screen" tabindex="1" title="full screen">full screen</a></li>
                          <li><a href="javascript:;" class="jp-restore-screen" tabindex="1" title="restore screen">restore screen</a></li>
                          <li><a href="javascript:;" class="jp-repeat" tabindex="1" title="repeat">repeat</a></li>
                          <li><a href="javascript:;" class="jp-repeat-off" tabindex="1" title="repeat off">repeat off</a></li>
                        </ul>
                      </div>
                      <div class="jp-title">
                        <ul>
                          <li>Lesson 1</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="jp-no-solution">
                    <span>Update Required</span>
                    To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
                  </div>
                </div>
              </div>

</section>
<!-- jPlayer -->
<script src="<?php echo URLADDR; ?>site/js/jquery-1.7.2.min.js"></script>
<link href="<?php echo URLADDR; ?>site/js/jPlayer/blue.monday/jplayer.blue.monday.css" rel="stylesheet">
<script src="<?php echo URLADDR; ?>site/js/jPlayer/jquery.jplayer.js"></script>
<script>
$('#jquery_jplayer_1').jPlayer({
    ready: function(){
        $(this).jPlayer("setMedia", {
            m4v: "<?php echo URLADDR; ?>site/assets/intro.m4v",
        });
    },
    supplied: "m4v",
});
</script>
