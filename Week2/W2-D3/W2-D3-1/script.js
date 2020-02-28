//A: Bekijk de bovenstaande functie.
//Bouw deze functie om tot een arrow function

const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions();


const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");

//B: schrijf de onderstaande functie om naar een arrow functie op 1 regel

const fivePlusSeven = function () {
    return 5 + 7
  };
  
  fivePlusSeven();

const fivePlusSeven = () => 5 + 7

fivePlusSeven();

//C: schrijf een zo kort mogelijke arrow function, zonder naam  (je hoeft het dus ook niet in een const te stoppen), die 1 + 2 bij elkaar optelt.  

() => 1 + 2

//D: Schrijf een arrow function, op 1 regel (dus met een impliciete return statement), die de params a en b bijelkaar optelt. Noem de functie myFunction

const myFunction = (a,b) => a + b

//E: Schrijf een arrow function op 1 regel, die de parameter a behoudt, en altijd a plus 5 returned. Noem de functie addFive. 

const addFive = a => a + 5

//F: Schrijf een arrow function met de naam createObject met een implicit return statement (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}

const createObject = () => ({greeting: "hoi"})

