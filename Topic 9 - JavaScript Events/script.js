window.onload = function () {
// onTouchBegin, onLoad, etc.)

    document.getElementById("square").ontouchstart = function () {
        document.getElementById("square").style.animationPlayState = "running"
    };

    document.getElementById("square").addEventListener("touchend",ontouchend,false);{
        document.getElementById("square").style.animationPlayState = "paused"
    };


}

