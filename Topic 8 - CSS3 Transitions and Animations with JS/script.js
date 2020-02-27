window.onload = function () {

    document.getElementById("square").onmouseover = function () {
        document.getElementById("square").style.animationPlayState = "running"
    };

    document.getElementById("square").onmouseout = function () {
        document.getElementById("square").style.animationPlayState = "paused"
    };

    document.getElementById("linear").onclick = function () {
        document.getElementById("linear").classList.toggle("linear-circle")

        setTimeout(function () {
            // document.getElementById("linear").classList.toggle("linear-circle")
            document.getElementById("linear").classList.toggle("linear-circle")
        }, 3500);
    };

    document.getElementById("ease").onclick = function () {
        document.getElementById("ease").classList.toggle("ease-circle")

        setTimeout(function () {
            // document.getElementById("linear").classList.toggle("linear-circle")
            document.getElementById("ease").classList.toggle("ease-circle")
        }, 3500);
    };

    document.getElementById("ease-in").onclick = function () {
        document.getElementById("ease-in").classList.toggle("ease-in-circle")

        setTimeout(function () {
            // document.getElementById("linear").classList.toggle("linear-circle")
            document.getElementById("ease-in").classList.toggle("ease-in-circle")
        }, 3500);
    };

    document.getElementById("ease-out").onclick = function () {
        document.getElementById("ease-out").classList.toggle("ease-out-circle")

        setTimeout(function () {
            // document.getElementById("linear").classList.toggle("linear-circle")
            document.getElementById("ease-out").classList.toggle("ease-out-circle")
        }, 3500);
    };

    document.getElementById("ease-in-out").onclick = function () {
        document.getElementById("ease-in-out").classList.toggle("ease-in-out-circle")

        setTimeout(function () {
            // document.getElementById("linear").classList.toggle("linear-circle")
            document.getElementById("ease-in-out").classList.toggle("ease-in-out-circle")
        }, 3500);
    };

};
