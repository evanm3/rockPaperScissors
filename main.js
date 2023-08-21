// an unchanging variable can be in all caps instead of camelCase
const OPTIONS = ['rock', 'paper', 'scissors'];


// let must be used because the score will be changing
let playerScore = 0;
let cpuScore = 0;

// function loops to 10 to likely reach a best 3 out of 5 endpoint 
function game(){
    for (let i = 1; i <= 10; i++) {
        // playRoundResults();
            if (playerScore === 5) {
                alert(`You won! CPU: ${cpuScore} to PLAYER: ${playerScore}`);
                playerScore = 0;
                cpuScore = 0;
            }else if (cpuScore === 5) {
                alert(`You lost. CPU: ${cpuScore} to PLAYER: ${playerScore}`);
                playerScore = 0;
                cpuScore = 0;
            }
    }
}

function playRoundResults(){
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    console.log(`PLAYER CHOICE: ${playerSelection} CPU CHOICE: ${computerSelection}`)
    console.log(playRound(playerSelection, computerSelection));

}

function playRound(playerSelection, computerSelection) { 

    if (playerSelection === computerSelection) {
        document.getElementById('results').innerHTML = "It's a draw!"; 
        document.getElementById("cpu-choice").innerHTML = `${playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1)}`;
        return;
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        document.getElementById('results').innerHTML = "Rock smashes Scissors. You win!";
        document.getElementById("cpu-choice").innerHTML = "Scissors";
        return playerScore++; 
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        document.getElementById('results').innerHTML = "Rock is covered by Paper. You lose!";
        document.getElementById("cpu-choice").innerHTML = "Paper";
        return cpuScore++; 
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        document.getElementById('results').innerHTML = "Paper covers Rock. You win!";
        document.getElementById("cpu-choice").innerHTML = "Rock";
        return playerScore++; 
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        document.getElementById('results').innerHTML = "Paper is cut by Scissors! You lose!";
        document.getElementById("cpu-choice").innerHTML = "Scissors";
        return cpuScore++; 
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        document.getElementById('results').innerHTML = "Scissors cut Paper! You win!";
        document.getElementById("cpu-choice").innerHTML = "Paper";
        return playerScore++; 
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        document.getElementById('results').innerHTML = "Scissors smashed by Rock. You lose!";
        document.getElementById("cpu-choice").innerHTML = "Rock";
        return cpuScore++; 
    } else {
        document.getElementById('results').innerHTML = "invalid response";
        return false;
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * OPTIONS.length);
    return (OPTIONS[computerChoice]);
}

const rockButton = document.querySelector('.rock');
const scissorsButton = document.querySelector('.scissors');
const paperButton = document.querySelector('.paper');

rockButton.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
    scoreBoardUpdate();
    game();
});

paperButton.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
    scoreBoardUpdate();
    game();
});

scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    scoreBoardUpdate();
    game();
});
 

const scoreBoard = document.querySelector('.scoreboard');
document.getElementById("scoreboard").innerHTML = `PLAYER: ${playerScore} CPU: ${cpuScore}`;

const scoreBoardUpdate = function() {
    document.getElementById("scoreboard").innerHTML = `PLAYER: ${playerScore} CPU: ${cpuScore}`;
}