function init(){
    var divw1 = document.getElementById("ventanainfo");
    if(divw1.addEventListener){
    divw1.addEventListener("mousedown", function(event){
    drag(this.parentNode, event);
    }, false);
    }
    else if(divw1.attachEvent){
    divw1.attachEvent("onmousedown", function(event){
    drag(this.parentNode, event);
    });
    }
    }
    if(window.addEventListener){
    window.addEventListener("load", init, false);
    }
    else if(windows.attachEvent){
    window.attachEvent("onload", init);
    }