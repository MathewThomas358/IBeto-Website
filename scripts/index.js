/*
Instructions to use the fullpage object:-

To add a function to be called on the transition from section n to n+1 use the method setTransition()
eg:- Let's have a function protoFunc() which will do a console output
        Let's add this function for the transition from section 1 to 2. It can be add as follows
            fullpageObj.setTransition("1-2", protoFunc);

To make the fullpage move to the next section simple call the method nextSection()
        fullpageObj.nextSection();

To make the fullpage move to the previous section simple call the method prevSection()
        fullpageObj.prevSection()

To make the fullpage move to a specific section x call the method moveToSection(x)
eg:- Lets move to section 2. Use this statement
        fullpageObj.move
*/


var fullpage = $("#fullpage");
var delay = 500;
var fullpageObj = new FullPage(fullpage, delay);        //FullPage object.... Add all transition functions to this object

$(".section-arrow").click(()=>{
        fullpageObj.nextSection();
});

/*
function protoFunc(){
    console.log("Transition from section 1 to 2");
}

fullpageObj.setTransition("1-2", protoFunc);

function protoFunc2(){
    console.log("Transition from section 2 to 1")
}

fullpageObj.setTransition("2-1", protoFunc2);*/


/* Page Animations */
$(".winner-know-more").click( (event)=>{
        var section = $(event.target).parent().parent();
        var winnerDisplay = $(event.target).parent();
        section.children().removeClass("col-md-3");
        section.children().addClass("col-md-2");
        winnerDisplay.removeClass("col-md-2");
        winnerDisplay.addClass("col-md-6");
        winnerDisplay.find(".winner-know-more").css("display", "none");
        winnerDisplay.find(".winner-close").css("display", "block");
});

$(".winner-close").click( (event)=>{
        var section = $(event.target).parent().parent();
        var winnerDisplay = $(event.target).parent();
        section.children().removeClass("col-md-2 col-md-6");
        section.children().addClass("col-md-3");
        winnerDisplay.find(".winner-know-more").css("display", "block");
        winnerDisplay.find(".winner-close").css("display", "none");
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js-0', '../assets/particles-0.json', function() {
        console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-1', '../assets/particles-1.json', function() {
        console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-2', '../assets/particles-0.json', function() {
        console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-3', '../assets/particles-1.json', function() {
        console.log('callback - particles.js config loaded');
});