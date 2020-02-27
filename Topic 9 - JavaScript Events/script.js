window.onload = function () {
// onTouchBegin, onLoad, etc.)


    document.getElementById("square").addEventListener("touchstart", function () {
        if (document.getElementById("square").style.animationPlayState === "running") {
            document.getElementById("square").style.animationPlayState = "paused"
        } else {
            document.getElementById("square").style.animationPlayState = "running"
        }
    });


}

