window.onload = function () {

    function winner() {
        var x = document.getElementById("niners");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    function bigger(){
        document.getElementById("chiefs").style.width = "600px";
        document.getElementById("chiefs").style.height = "300px";
        document.getElementById("niners").style.width = "600px";
        document.getElementById("niners").style.height = "300px";
    }

    function smaller(){
        document.getElementById("chiefs").style.width = "200px";
        document.getElementById("chiefs").style.height = "100px";
        document.getElementById("niners").style.width = "200px";
        document.getElementById("niners").style.height = "100px";
    }

    document.getElementById("btn").addEventListener("click", function () {
        winner();
    })

    document.getElementById("big").addEventListener("click", function () {
        bigger();
    })

    document.getElementById("small").addEventListener("click", function () {
        smaller();
    })

    document.getElementById("red").addEventListener("click", function () {
        document.body.style.background = "Red";
    })

    document.getElementById("gold").addEventListener("click", function () {
        document.body.style.background = "Gold";
    })

    document.getElementById("white").addEventListener("click", function () {
        document.body.style.background = "White";
    })

}