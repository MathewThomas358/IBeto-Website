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
var delay = 1500;
var fullpageObj = new FullPage(fullpage, delay);        //FullPage object.... Add all transition functions to this object
/*
function protoFunc(){
    console.log("Transition from section 1 to 2");
}

fullpageObj.setTransition("1-2", protoFunc);

function protoFunc2(){
    console.log("Transition from section 2 to 1")
}

fullpageObj.setTransition("2-1", protoFunc2);*/