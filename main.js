// an unchanging variable can be in all caps instead of camelCase
const OPTIONS = ['rock', 'paper', 'scissors'];


// let must be used because the score will be changing
let playerScore = 0;
let cpuScore = 0;

// function loops to 10 to likely reach a best 3 out of 5 endpoint 
function game(){
    for (let i = 1; i <= 10; i++) {
        singleRoundResults();
            if (playerScore === 3) {
                alert(`You won! CPU: ${cpuScore} to PLAYER: ${playerScore}`);
                break;
            }else if (cpuScore === 3) {
                alert(`You lost. CPU: ${cpuScore} to PLAYER: ${playerScore}`);
                break;
            }
    }
}

function singleRoundResults(){
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    console.log(`PLAYER CHOICE: ${playerSelection} CPU CHOICE: ${computerSelection}`)
    console.log(singleRound(playerSelection, computerSelection));
    console.log(`player: ${playerScore}, cpu: ${cpuScore}`);

}

function singleRound(playerSelection, computerSelection) { 
    
    if (playerSelection === computerSelection) {
        console.log("It's a draw!"); 
        return;
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("Rock smashes Scissors. You win!");
        return playerScore++; 
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        console.log("Rock is covered by Paper. You lose!");
        return cpuScore++; 
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        console.log("Paper covers Rock. You win!");
        return playerScore++; 
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Paper is cut by Scissors! You lose!");
        return cpuScore++; 
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Scissors cut Paper! You win!");
        return playerScore++; 
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Scissors smashed by Rock. You lose!");
        return cpuScore++; 
    } else {
        console.log("invalid response");
        return false;
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * OPTIONS.length);
    return (OPTIONS[computerChoice]);
}

function getPlayerChoice() {
    let playerSelectionPrompt = prompt("Rock, Paper, or Scissors?", "Rock/Paper/Scissors");
    while (playerSelectionPrompt == null) {
        playerSelectionPrompt = prompt("Rock, Paper, or Scissors?", "Rock/Paper/Scissors");
    }
    return (playerSelectionPrompt.toLowerCase())
}

console.log(game());
