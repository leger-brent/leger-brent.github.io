//create a new request variable
var xhttp = new XMLHttpRequest();

//This function will run as a request goes through a state change
xhttp.onreadystatechange = function() {
 
 //watches for when the ready state is 4 and status code is 200. Essentially this is a successful response.
  if (this.readyState == 4 && this.status == 200) {
   
   //creates a variable that parses the response
    var parsed = JSON.parse(xhttp.responseText);

    //prints the parsed JSON as an object to the console
    console.log(parsed);

    //pulls the pokemon name and height returned from the api. This will vary dependening on the input from the user
    console.log("Pokemon name: " + parsed.name);
    console.log("Pokemon height: " + parsed.height);
  }
};

//prompts the user to pick a number between 1-807
var i = prompt("Pick a number 1-807");

//passes the number to the pokeapi to request data from the pokemon that corresponds to that number
xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + i + "/", true);
xhttp.send();
