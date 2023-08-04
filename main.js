// console.log("Butterfinger BBs");

const optionsArray = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * optionsArray.length);
    return (optionsArray[computerChoice]);
}

const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelectionPrompt = prompt("Rock, Paper, or Scissors?", "R/P/S");
const playerSelection = playerSelectionPrompt.toLowerCase();

function singleRound(playerSelection, computerSelection) { 
    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
} else if(playerSelection === "rock" && computerSelection === "scissors"){
    console.log("Rock smashes Scissors. You win!");
} else if(playerSelection === "rock" && computerSelection === "paper") {
    console.log("Rock is covered by Paper. You lose!")
} else if(playerSelection === "paper" && computerSelection === "rock") {
    console.log("Paper covers Rock. You win!")
} else if(playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Paper is cut by Scissors! You lose!")
} else if(playerSelection === "scissors" && computerSelection === "paper") {
    console.log("Scissors cut Paper! You win!")
} else if(playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Scissors smashed by Rock. You lose!")
} else {
    console.log("incorrect response")
}
}


console.log(singleRound(playerSelection, computerSelection));;

// console.log(playerSelection);
// console.log(computerSelection);
// alert(singleRound());

// console.log(getComputerChoice());

// let randomNumber = Math.floor(Math.random()*3);
// console.log(randomNumber);