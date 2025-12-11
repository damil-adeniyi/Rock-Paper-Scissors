

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice
    // console.log(randomChoice);   
}

function getHumanChoice () {
    let humanChoice = prompt('Pick your choice between rock, paper or scissors');
    return humanChoice
    // console.log(humanChoice);    
}

let humanScore = 0;
let computerScore = 0;



function playGame() {

    function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log('A draw');
        
    }else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        console.log(`You lose! ${computerChoice} beat ${humanChoice}`); 
    }else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        console.log(`You lose! ${computerChoice} beat ${humanChoice}`); 
    }else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log(`You lose! ${computerChoice} beat ${humanChoice}`); 
    }else{
        humanScore++;
        console.log(`You Win! ${humanChoice} beat ${computerChoice}`);
    }
   
}


for (let i = 0; i < 5; i++) {
    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();
    playRound();

    console.log(`Human Score: ${humanScore}  Computer Score: ${computerScore}`);  

}
}

playGame();