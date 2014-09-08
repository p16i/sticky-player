var playerID = '#player';
var originHeight = 315;
var deadline;

$(document).ready(function(){
    deadline = originHeight + $(playerID).position().top;
});

$(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    if( scrollPos > deadline ) {
        $('#player-wrapper').addClass('fixed');
    }else {
        $('#player-wrapper').removeClass('fixed');
    }
});
