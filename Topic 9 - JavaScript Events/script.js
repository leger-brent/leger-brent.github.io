window.onload = function () {
// onTouchBegin, onLoad, etc.)
    let toggle = 0;

    document.getElementById("square").style.animationPlayState = "running"

    document.getElementById("square").addEventListener("touchstart", function () {
        if (document.getElementById("square").style.animationPlayState === "running") {
            document.getElementById("square").style.animationPlayState = "paused"
        } else {
            document.getElementById("square").style.animationPlayState = "running"
        }
    });

    document.getElementById("mouse").onclick = function (e) {
        let x = e.clientX;
        let y = e.clientY;
        document.getElementById("mouseClick").innerHTML = "You clicked on position (" + x + "," + y + ").";
    }


    document.getElementById("linear").classList.toggle("linear-circle");
    setTimeout(function () {
        // document.getElementById("linear").classList.toggle("linear-circle")
        document.getElementById("linear").classList.toggle("linear-circle")
    }, 3500);

    document.getElementById("linear").addEventListener("touchstart", function () {
        document.getElementById("linear").classList.toggle("linear-circle")
    });

};