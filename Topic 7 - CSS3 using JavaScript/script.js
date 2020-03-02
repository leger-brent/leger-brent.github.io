window.onload = function () {

    function winner() {


        if (document.getElementById("niners").style.visibility === "hidden") {
            document.getElementById("niners").style.visibility = "visible";
        } else {
            document.getElementById("niners").style.visibility = "hidden";
        }
    }

    function bigger() {
        if (document.getElementById("chiefs").style.width === "30%") {
            document.getElementById("chiefs").style.width = "20%";
            document.getElementById("chiefs").style.height = "20%";
            document.getElementById("niners").style.width = "20%";
            document.getElementById("niners").style.height = "20%";
        } else {
            document.getElementById("chiefs").style.width = "30%";
            document.getElementById("chiefs").style.height = "30%";
            document.getElementById("niners").style.width = "30%";
            document.getElementById("niners").style.height = "30%";
        }
    }

    function smaller() {
        if (document.getElementById("chiefs").style.width === "15%") {
            document.getElementById("chiefs").style.width = "20%";
            document.getElementById("chiefs").style.height = "20%";
            document.getElementById("niners").style.width = "20%";
            document.getElementById("niners").style.height = "20%";
        } else {
            document.getElementById("chiefs").style.width = "15%";
            document.getElementById("chiefs").style.height = "15%";
            document.getElementById("niners").style.width = "15%";
            document.getElementById("niners").style.height = "15%";
        }
    }

    document.getElementById("btn").addEventListener("click", function () {
        winner();
    });

    document.getElementById("big").addEventListener("click", function () {
        bigger();
    });

    document.getElementById("small").addEventListener("click", function () {
        smaller();
    });

    document.getElementById("red").addEventListener("click", function () {
        document.body.style.background = "Red";
    });

    document.getElementById("gold").addEventListener("click", function () {
        document.body.style.background = "Gold";
    });

    document.getElementById("white").addEventListener("click", function () {
        document.body.style.background = "White";
    })

};