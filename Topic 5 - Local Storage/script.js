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

//stops this section from running until there is data available
window.onload = function () {

    //Used to present information back to the user
    const lsOutput = document.getElementById("output");

    //starts a function whenever the submit button is clicked
    document.getElementById("btn").addEventListener("click", function () {

        let hName = document.getElementById("hname").value;
        let hHp = document.getElementById("hp");
        let hAtk = document.getElementById("atk");
        let hDef = document.getElementById("def");
        let hSpd = document.getElementById("spd");

        //verify there is good data to work with
        if (hName && hHp && hAtk && hDef && hSpd) {

            //creates a new object
            let hero = new Hero(hName, hHp, hAtk, hDef, hSpd);

            //since local storage can only hold a key and a value and I've created an object,
            //I need to change my object into something that can be stored. Enter JSON
            let hero1 = JSON.stringify(hero);

            //stores the JSON as the value using the name provided as the key
            localStorage.setItem(hName, hero1);

            //reloads the page after each click
            location.reload();
        }
    });

    //starts a function whenever clear all clicked.
    document.getElementById("clrBtn").addEventListener("click", function () {

        //clears local storage of all data
        localStorage.clear();

        //reloads the page
        location.reload();
    });

    //loops through the length of local storage and prints the key and value
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        //Print the values
        lsOutput.innerHTML += `${key}: ${value}<br/>`
    }

};