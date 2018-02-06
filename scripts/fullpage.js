class FullPage{

    nextSection(){
        if(this.section==this.sectionsCount-1)
            return;
        this.section++;
        this.sectionsContainer.css("top", this.section*(-100) + "vh");
        this.transitionArray[(this.section)+"-"+(this.section+1)]();
    }

    prevSection(){
        if(this.section==0)
            return;
        this.section--;
        this.sectionsContainer.css("top", this.section*(-100) + "vh");
        this.transitionArray[(this.section+2)+"-"+(this.section+1)]();
    }

    moveToSection(x){
        var x1 = (x-1)%this.sectionsCount;
        if(x1>this.section){
            this.nextSection();
            this.moveToSection(x);
        }
        else if(x1<this.section){
            this.prevSection();
            this.moveToSection(x);
        }
    }

    setTransition(str, func){
        this.transitionArray[str]=func;
    }

    constructor(element, duration){
        this.section = 0;
        this.scroll = true;
        this.fullpage = element;
        this.scrollDelay = duration;
        this.sectionsContainer = this.fullpage.find("#sections-container");
        this.sectionsCount = this.sectionsContainer.children().length;
        this.transitionArray = {};
        for(var i=0 ; i<this.sectionsCount ; i++){
            if(i!=0)
                this.transitionArray[(i+1)+"-"+(i)] = new Function();
            if(i!=this.sectionsCount-1)
                this.transitionArray[(i+1)+"-"+(i+2)] = new Function();
        }
        this.initVerticalTouch = 0;
        this.finVerticalTouch = 0;
        var fullpageObj = this;

        fullpage.bind('touchstart', function(e){
            fullpageObj.initVerticalTouch = e.originalEvent.touches[0].screenY;
        });

        fullpage.bind('touchmove', function(e){
            fullpageObj.finVerticalTouch = e.originalEvent.touches[0].screenY;
        });

        fullpage.bind('touchend', function(e){
            var delta = fullpageObj.finVerticalTouch - fullpageObj.initVerticalTouch;
            if(delta > 100)
                fullpageObj.prevSection();
            else if(delta < -100)
                fullpageObj.nextSection();
            fullpageObj.initVerticalTouch = fullpageObj.finVerticalTouch = 0;
        });

        $(window).bind('wheel', function(e){
            if(!fullpageObj.scroll)
                return;
            fullpageObj.scroll = false;
            setTimeout(function(){ fullpageObj.scroll = true }, fullpageObj.scrollDelay);
            if(e.originalEvent.deltaY > 0) {
                fullpageObj.nextSection();
            } else if(e.originalEvent.deltaY < 0) {
                fullpageObj.prevSection();
            }
        });

        console.log("working");
        $(document).bind("keydown", function(e){
            if(e.keyCode==40 || e.keyCode==34)
                fullpageObj.nextSection();
            else if(e.keyCode==38 || e.keyCode==33)
                fullpageObj.prevSection();
        });
    }
}