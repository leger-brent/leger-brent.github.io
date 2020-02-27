window.onload = function () {
// onTouchBegin, onLoad, etc.)

    document.getElementById("square").ontouchstart = function () {
        document.getElementById("square").style.animationPlayState = "running"
    };

    document.getElementById("square").ontouchend = function () {
        document.getElementById("square").style.animationPlayState = "paused"
    };


}

