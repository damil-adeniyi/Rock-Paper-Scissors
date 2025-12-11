

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomIndex];
    return randomChoice
    // console.log(randomChoice);   
}

function getHumanChoice () {
    let humanChoice = prompt('Pick your choice between Rock, Paper or Scissors');
    return humanChoice
    // console.log(humanChoice);    
}

let humanScore = 0;
let computerScore = 0;

