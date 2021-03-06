//This creates a class for an object
class Person {
  //contructor for the object
  constructor(name) {
    //fields for the object
    this.name = name;
  }
  //method for the object
  greet() {
    console.log("Hi, my name is " + this.name + ".");
  }
  action() {
	console.log(this.name + " smiles at you.");
  }
}

// The creates a class for an object that extends another class
class Hero extends Person {
  constructor(name, attack, defense, hp, mp) {
    //inherited field from parent class
    super(name);
    //extended fields for the object
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.mp = mp;
  }
  
  //Overloading the super method
  action(){
	console.log(this.name + " observes you.");
  }
}

//instantiate a new Person object
var girl = new Person("Mei");
// calls the function of the class
girl.greet();
// calls another function of the class
girl.action();

//instantiate a new Hero object
var hero1 = new Hero("Vahn", 10, 10, 50, 15);
//method validating access to parent class
hero1.greet();
//method showing overloaded function performs a different action
hero1.action();
//call to field from the subclass
console.log(hero1.attack);