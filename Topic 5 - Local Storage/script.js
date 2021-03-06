//Class template
class Hero {
    constructor(name, hp, atk, def, spd) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spd = spd;
    }
}

function loopy(output) {
    output.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        output.innerHTML += `${key}: ${value}<br/>`
    }
    ;
}

//stops this section from running until there is data available
window.onload = function () {


    //Used to present information back to the user
    const lsOutput = document.getElementById("output");

    //starts a function whenever the submit button is clicked
    document.getElementById("btn").addEventListener("click", function () {

        let hName = document.getElementById("hname").value;
        let hHp = document.getElementById("hp").value;
        let hAtk = document.getElementById("atk").value;
        let hDef = document.getElementById("def").value;
        let hSpd = document.getElementById("spd").value;

        //verify there is good data to work with
        if (hName && hHp && hAtk && hDef && hSpd) {

            //creates a new object
            let hero = new Hero(hName, hHp, hAtk, hDef, hSpd);

            //since local storage can only hold a key and a value and I've created an object,
            //I need to change my object into something that can be stored. Enter JSON
            let hero1 = JSON.stringify(hero);

            //stores the JSON as the value using the name provided as the key
            localStorage.setItem(hName, hero1);

            loopy(lsOutput);
        }
    });

    //starts a function whenever clear all clicked.
    document.getElementById("clrBtn").addEventListener("click", function () {

        //clears local storage of all data
        localStorage.clear();

        loopy(lsOutput);
    });

    loopy(lsOutput);

};