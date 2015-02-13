(function($){

  jQuery.fadeCss = function(){
    var events = new Array('transitionend','webkittransitionend','otransitionend','otransitionend','mstransitionend');
    for(var i=0; i<events.length; i++)
        if('on'+events[i] in window)
            return events[i];
    return false;
  }

  jQuery.fn.fadeInCss = function(speed){
    var speed = jQuery.fx.speeds[speed] != undefined ? jQuery.fx.speeds[speed] : (isNaN(speed) ? jQuery.fx.speeds['_default'] : speed);    
    var t = this;
    var event = $.fadeCss();
    if(event)
        $(t).unbind(event);
    $(t)
        .data('fadeInCss', true)
        .css({ 
            'opacity': 0,   
            'visibility': 'visible'})
    setTimeout(function(){
        $(t).css({'transition': 'opacity '+speed/1000+'s linear', 'opacity': 1});      
    }, 20);
  };

  jQuery.fn.fadeOutCss = function(speed){
    var speed = jQuery.fx.speeds[speed] != undefined ? jQuery.fx.speeds[speed] : (isNaN(speed) ? jQuery.fx.speeds['_default'] : speed);    
    var t = this;
    var event = $.fadeCss();
    if(event)
        $(t).bind(event, function(){
            $(t).css({'visibility': 'hidden'})})
    else
        setTimeout(function(){
            $(t).css({'visibility': 'hidden'})})
    $(t)
        .data('fadeInCss', false)
        .css({
            'transition': 'opacity '+speed/1000+'s linear',
            'opacity': 0});
  };

  jQuery.fn.fadeToggleCss = function(speed){
    var t = this;
    if($(t).data('fadeInCss'))
        $(t).fadeOutCss(speed);
    else
        $(t).fadeInCss(speed);
  };

})(jQuery);