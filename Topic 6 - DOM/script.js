window.onload = function () {

    let clickNum = 0;
    let list = document.querySelector("ol");
    let item = document.querySelector("li#original-two");
    let remove = document.getElementById("original-three");


    function listItem(text) {
        let newLi = document.createElement("li");
        newLi.innerHTML = text;
        newLi.className = "custom";
        return newLi;
    }

    document.getElementById("btn").addEventListener("click", function () {

        if (clickNum == 0) {
            list.appendChild(listItem("appendChild to list"));
            document.getElementById("btn").innerHTML = "Click to Insert Before";
            clickNum += 1;
        } else if (clickNum == 1) {
            list.insertBefore(listItem("insertBefore Original - Two"), item);
            document.getElementById("btn").innerHTML = "Click to Remove Child";
            clickNum += 1;
        } else if (clickNum == 2) {
            list.removeChild(remove);
            document.getElementById("btn").innerHTML = "Click to Start Over";
            clickNum += 1;
        } else {
            location.reload();
        }
    })
}