

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice
    // console.log(randomChoice);   
}

    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    let btn3 = document.createElement('button');
    const resetBtn = document.createElement('button');

    let result = document.createElement('div');
    let score = document.createElement('div');
    const roundsLeft = document.createElement('div');

    result.style.textAlign = 'center';

    let choice = document.querySelector('.choice')
    choice.appendChild(btn1);
    choice.appendChild(btn2);
    choice.appendChild(btn3);
    choice.appendChild(resetBtn);

   btn1.innerText = 'rock';
    btn2.innerText = 'paper';
    btn3.innerText = 'scissors';
    resetBtn.innerText = 'Reset Game'

    let display = document.querySelector('.display');
    display.appendChild(result);
    display.appendChild(score);
    display.appendChild(roundsLeft);

    
    
 

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const MAX_ROUNDS = 5;
score.innerText = `Human Score: ${humanScore}  Computer Score: ${computerScore}`;
roundsLeft.innerText = `Rounds played: 0 / ${MAX_ROUNDS}`;


//Game Logic
    function playRound(humanChoice) {
    if (roundCount >= MAX_ROUNDS) return;

   const computerChoice = getComputerChoice();
   roundCount++;

    if (humanChoice === computerChoice) {
       result.innerText = 'A draw';
        
    }else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
       result.innerText = `You lose! ${computerChoice} beat ${humanChoice}`; 
    }else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
       result.innerText = `You lose! ${computerChoice} beat ${humanChoice}`; 
    }else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
       result.innerText = `You lose! ${computerChoice} beat ${humanChoice}`; 
    }else{
        humanScore++;
       result.innerText = `You Win! ${humanChoice} beat ${computerChoice}`;
    }

     score.innerText = `Human Score: ${humanScore}  Computer Score: ${computerScore}`;
     roundsLeft.innerText = `Rounds played: ${roundCount} / ${MAX_ROUNDS}`;

  // End game after 5 rounds
  if (roundCount === MAX_ROUNDS) {
    if (humanScore > computerScore) {
      result.innerText += '\n🎉 You won the game!';
    } else if (humanScore < computerScore) {
      result.innerText += '\n💻 Computer won the game!';
    } else {
      result.innerText += '\n🤝 The game is a tie!';
    }
  }

}

// Events
btn1.addEventListener("click", () => {
  playRound(btn1.innerText);
});

btn2.addEventListener("click", () => {
  playRound(btn2.innerText);
});

btn3.addEventListener("click", () => {
  playRound(btn3.innerText);
});

// Reset
resetBtn.addEventListener('click', resetGame);

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;

  result.innerText = 'Game reset. Make a move!';
  score.innerText = `Human: 0 | Computer: 0`;
  roundsLeft.innerText = `Rounds played: 0 / ${MAX_ROUNDS}`;
}



// for (let i = 0; i < 5; i++) {
//     // const humanSelection = getHumanChoice();
//     // const computerSelection = getComputerChoice();
//     playRound();

//     score.innerText = `Human Score: ${humanScore}  Computer Score: ${computerScore}`;

//     if(humanScore > computerScore){
//         result.innerText = 'You Win!!'
//     } else if (humanScore = computerScore){
//         result.innerText = 'It is a Tie'
//     }
//     else{
//         result.innerText = 'Better luck next time'
//     }
//     // console.log(`Human Score: ${humanScore}  Computer Score: ${computerScore}`);  

// }
// }

// playGame();