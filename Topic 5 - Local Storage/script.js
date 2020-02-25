//Class template
class Hero {
    constructor(name, hp, atk, def, spd) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spd = spd;
    }
};

//stops this section from running until there is data available
window.onload = function () {
    //brings data over from the form on the html file.
    let nameKey = document.getElementById("hname").value;
    let hpKey = document.getElementById("hp").value;
    let atkKey = document.getElementById("atk").value;
    let defKey = document.getElementById("def").value;
    let spdKey = document.getElementById("spd").value;
    let lsOutput = document.getElementById("output").value;

    //starts a function whenever the submit button is clicked
    document.getElementById("btn").addEventListener("click", function () {

        //pull data into the function

        //verify there is good data to work with
        if (nameKey && hpKey && atkKey && defKey && spdKey) {

            //creates a new object
            let hero = new Hero(nameKey, hpKey, atkKey, defKey, spdKey);

            //since local storage can only hold a key and a value and I've created an object,
            //I need to change my object into something that can be stored. Enter JSON
            let hero1 = JSON.stringify(hero);

            //stores the JSON as the value using the name provided as the key
            localStorage.setItem(nameKey, hero1);

            //reloads the page after each click
            location.reload();
        }
    })

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

        //I was right the whole time. This isn't jQuery, but Template Literals found natively in ES6
        lsOutput.innerHTML += `${key}: ${value}<br/>`
    }

};
