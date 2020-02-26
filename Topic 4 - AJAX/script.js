window.onload = function () {
//create a new request variable
    var xhttp = new XMLHttpRequest();

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    document.getElementById("btn").addEventListener("click", function () {
//This function will run as a request goes through a state change
            let i = document.getElementById("num").value;
                xhttp.onreadystatechange = function () {

                    //watches for when the ready state is 4 and status code is 200. Essentially this is a successful response.
                    if (this.readyState == 4 && this.status == 200) {

                        //creates a variable that parses the response
                        var parsed = JSON.parse(xhttp.responseText);

                        //pulls the pokemon name and types returned from the api. This will vary depending on the input from the user
                        let word = capitalizeFirstLetter(parsed.name)
                        document.getElementById("pName").innerHTML = word;
                        document.getElementById("pTypes").innerHTML = "";

                        for (var i = 0; i < parsed.types.length; i++) {
                            word = capitalizeFirstLetter(parsed.types[i].type.name)
                            document.getElementById("pTypes").innerHTML += word + "<br/>";
                        }
                    }
                };

                //passes the number to the pokeapi to request data from the pokemon that corresponds to that number
                xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + i + "/", true);
                xhttp.send();
        }
    )
    ;
};