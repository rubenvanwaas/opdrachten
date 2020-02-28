alert("Hi there and welcome to WHEEL OF F... Oh no never mind, it's just a number guessing game.. Oh well, have fun!");
let name = prompt("What's your name?");
alert("Welcome to the game " + name);
alert("Now you will choose a range to play the game in.");
let lowNum = prompt("Choose your low number in your desired range.");
let highNum = prompt("Choose your high number in your desired range.")
alert(`Please guess a number between ${lowNum} and ${highNum}`);


let computerChoice = Math.floor(Math.random() *(lowNum, highNum) +lowNum);
let userChoice = prompt("What's your guess?");
let tries = 1;
let maxTries = 5;




for (i=0; i<6; i++) {

    if (parseInt(userChoice) > highNum || parseInt(userChoice) < lowNum ) {
        userChoice = prompt(`Please choose a number between ${lowNum} and ${highNum}!`);
    }


    if (parseInt(userChoice) != computerChoice)  {
        userChoice = prompt(`unfortunately you are wrong, you have ${maxTries--} guesses left! Please try again`);
        tries++;
    }
    
    if (parseInt(userChoice) === computerChoice) {
        userChoice = alert(`You guessed correctly it took you ${tries} guesses!`);
        alert("We hope you enjoyed playing!");
    break;}

  
        
        
        else if (tries > 5)  {
            alert("GAME OVER. We hope you enjoyed playing!");
            break;
            
        }
        
    
    
    

}

