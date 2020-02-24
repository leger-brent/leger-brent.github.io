// Here I'm simulating a JSON file that you would import from an external webserver. I've created objects at the top level with objects nested underneath them
var jsonInput = 
`[
   {
      "name":"Vahn",
      "level":15,
      "hp":700,
      "mp":90,
      "atk":50,
      "def":50,
      "spd":50,
      "raSeru":[
         {
            "name":"Meta",
            "level":3
         }
      ]
   },
   {
      "name":"Noa",
      "level":12,
      "hp":550,
      "mp":75,
      "atk":30,
      "def":30,
      "spd":70,
      "raSeru":[
         {
            "name":"Terra",
            "level":2
         }
      ]
   }
]`;

//I print the simulated input to the log to verify that it actually a string file.
console.log(jsonInput);

//Now that I've verifed my JSON is actually a string, I'm ready to parse it. Parsing it will allow me to manipulate the data of the object using functions. 
var parsed = JSON.parse(jsonInput);

//Now that the object is parsed, I can use a function. I use the push function to add another hero to the array.
parsed.push(
   {
      "name":"Gala",
      "level":10,
      "hp":700,
      "mp":40,
      "atk":70,
      "def":60,
      "spd":20,
      "raSeru":[
         {
            "name":"Ozma",
            "level":1
         }
      ]
   }
   );

//I can also manipulate a specific data field by referencing the index of the object in the array and using the dot notation on the field. 
//Here I update the hp for my first hero.
parsed[0].hp = parsed[0].hp + 100;

//I print the updated value to the console to verify that it updated.
console.log(parsed[0].hp);

//To turn my object back into a string, I use the stringify function on my parsed variable. I chose to create a new variable to hold the new string data.
var jsonOutput = JSON.stringify(parsed);

//I print the new variable to the console and see that it is indeed a string and no longer an object.
console.log(jsonOutput);