window.onload = function () {

    document.getElementById("btn").onclick = function () {

        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillStyle = "azure";
        ctx.textAlign = "center";
        ctx.fillText("Video: HD Space Scene 'Blue_Space' - Free M.G Stock Footage", canvas.width / 2, canvas.height / 3.25);
        ctx.fillText("Audio: Jim Yosef - Firefly [NCS Release]", canvas.width / 2, canvas.height / 1.25);

    }


}

