window.onload = function () {
// onTouchBegin, onLoad, etc.)
    let toggle = 0;

    document.getElementById("square").style.animationPlayState = "running"

    document.getElementById("square").addEventListener("touchstart", function () {
        event.preventDefault();
        if (document.getElementById("square").style.animationPlayState === "running") {
            document.getElementById("square").style.animationPlayState = "paused"
        } else {
            document.getElementById("square").style.animationPlayState = "running"
        }
    });

    document.getElementById("mouse").onclick = function () {
        event.preventDefault();
        let x = event.clientX;
        let y = event.clientY;
        document.getElementById("mouseClick").innerHTML = "You clicked on position (" + x + "," + y + ").";
    }


    document.getElementById("linear").classList.toggle("linear-circle");
    setTimeout(function () {
        // document.getElementById("linear").classList.toggle("linear-circle")
        document.getElementById("linear").classList.toggle("linear-circle")
    }, 3500);

    document.getElementById("linear").addEventListener("touchstart", function () {
        event.preventDefault();
        document.getElementById("linear").classList.toggle("linear-circle")
    });

};