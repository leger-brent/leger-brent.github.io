//This creates three variables
let hero1 = "Vahn",
  hero2 = "Noa",
  hero3 = "Gala";

//This creates generic variables for the loop
let i, k;

//This loop will loop through. Each loop will increment i until i is not longer less than 3.
for (i = 0; i < 3; i++) {
  
  //This is a conditional statement that will set k to some value depending on the value of i.
  if (i === 0) {
    k = hero1;
  } else if (i === 1) {
    k = hero2;
  } else {
    k = hero3;
  }

  //Each loop will print the value of the k variable
  console.log("The name of this hero is " + k + ".");
}
console.log("\n");

//create Array of three strings
let hero = ["Meta", "Terra", "Ozma"];

//loop through and prints the strings from the array
for (i = 0; i < 3; i++) {
  console.log("The name of this hero is " + hero + ".");
}
console.log("\n");

//Array function that adds more elements to the array
hero.push("Vahn", "Noa", "Gala");

//function that returns the length of an array parameter passed to it.
function howMany(array) {
  return array.length;
}

//set i equal to the length value returned from the function
i = howMany(hero);

//print the value of i
console.log("There are " + i + " elements in the Hero Array.");

//associate array
var Heroes = {
  One: "Vahn",
  Two: "Noa",
  Three: "Gala"
};
console.log("\n");

//loop to print the values in the associate array
for (var key in Heroes) {
  console.log("Hero " + key + " is named " + Heroes[key] + ".");
}
