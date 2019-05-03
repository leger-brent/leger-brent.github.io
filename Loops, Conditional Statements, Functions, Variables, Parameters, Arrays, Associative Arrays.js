//create variables for Hero names
let hero1 = "Vahn",
    hero2 = "Noa",
    hero3 = "Gala";

//create variable for loop and placeholder for 
let i,
    k;

//loop through an if-else statement and print out the 3 Hero names
for (i = 0; i < 3; i++)
{
    if (i == 0) {
        k = hero1;
    }
    else if (i == 1)
    {
        k = hero2;
    }
    else
    {
        k = hero3;
    }
    console.log(`The name of this hero is ${k}.`);
}
console.log('\n');

//create Array of special character names
let hero = ["Meta", "Terra", "Ozma"];

//loop through and print special character names
for (i = 0; i < 3; i++)
{
    console.log(`The name of this hero is ${hero[i]}.`);;
}
console.log('\n');

//add elements to array
hero.push("Vahn","Noa","Gala")

//function that returns the length of an array parameter passed to it.
function howMany(array)
{
    return array.length
}

let num = howMany(hero);

console.log(`There are ${num} elements in the Hero Array.`)