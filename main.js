// console.log("Butterfinger BBs");

const optionsArray = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * optionsArray.length);
    console.log(optionsArray[computerChoice]);
}
getComputerChoice();

// console.log(getComputerChoice());

// let randomNumber = Math.floor(Math.random()*3);
// console.log(randomNumber);