class FullPage{

    nextSection(){
        if(this.section==this.sectionsCount-1)
            return;
        this.section++;
        this.sectionsContainer.css("top", this.section*(-100) + "vh");
    }

    prevSection(){
        if(this.section==0)
            return;
        this.section--;
        this.sectionsContainer.css("top", this.section*(-100) + "vh");
    }

    constructor(element, duration){
        this.section = 0;
        this.scroll = true;
        this.fullpage = element;
        this.scrollDelay = duration;
        this.sectionsContainer = this.fullpage.find("#sections-container");
        this.sectionsCount = this.sectionsContainer.children().length;
        var fullpageObj = this;

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
            if(e.keyCode==40)
                fullpageObj.nextSection();
            else if(e.keyCode==38)
                fullpageObj.prevSection();
        });
    }
}