var sections = $("#sections-container").children().length;
var section = 0;
var lastScrollTop = 0;
var scroll = true;

var nextSection = ()=>{
    if(section==sections-1)
        return;
    section++;
    $("#sections-container").css("top", section*(-100) + "vh");
}

var prevSection = ()=>{
    if(section==0)
        return;
    section--;
    $("#sections-container").css("top", section*(-100) + "vh");
}

$(window).bind('mousewheel', (e)=>{
    if(!scroll)
        return;
    scroll = false;
    setTimeout(function(){ scroll = true }, 1500);
    console.log(e.originalEvent.wheelDelta);
    if(e.originalEvent.wheelDelta < 0) {
        nextSection();
    } else if(e.originalEvent.wheelDelta > 0) {
        prevSection();
    }
});
console.log("working");
$(document).keydown(function(event) {
    console.log('Handler for .keypress() called. - ' + event.keyCode);
    switch(event.keyCode){
        case 40:nextSection();
                break;
        case 38:prevSection();
                break;
    }
});