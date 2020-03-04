function Clock(){
    this.X = 0;
    this.Y = 0;

    let myView = null;

    this.start=function(view) {
        myView=view;
    }

    this.updateView=function() {
        if ( myView )
                myView.update();
    }

    this.move = function(){
        this.X = 300 + 250 * Math.cos(Math.PI/2 - (seconds*6)*(Math.PI/180));
        this.Y = 300 - 250 * Math.sin(Math.PI/2 - (seconds*6)*(Math.PI/180));
        this.updateView();
    }
}


