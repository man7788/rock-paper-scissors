'use strict';

// Randomly generate a number
// Assign the number to a variable
// Assign the generated number to Rock/Paper/Scissors
// Return either Rock/Paper/Scissors
function getComputerChoice() {

let choiceNum = Math.floor(Math.random() * 3);

switch (choiceNum) {
  case 0:
    return 'Rock';
  case 1:
    return 'Paper';
  case 2:
    return 'Scissors';
}};

// Make player's select case-insensitive
// Round a draw if two selects equal
// Compare 2 selects, total 6 ways win or lose
// Return Round
// Round = playerNum - computerNum;
// Rock - Paper = -1, lose
// Paper - Scissors = -2, lose
// Scissors - Rock = 3, lose

// Rock - Scissors = -3, win
// Paper - Rock = 1, win
// Scissors - Paper = 2, win


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  let Round;
  if (playerSelection === computerSelection.toLowerCase()) {
    Round = 'Draw!'
  }

  let playerNum;
  if (playerSelection === 'rock') {
    playerNum = 0;
  } else if (playerSelection === 'paper') {
    playerNum = 1;
  } else if (playerSelection === 'scissors') {
    playerNum = 3;
  }
  
  let computerNum;
  if (computerSelection === 'Rock') {
    computerNum = 0;
  } else if (computerSelection === 'Paper') {
    computerNum = 1;
  } else if (computerSelection === 'Scissors') {
    computerNum = 3;
  }

  let playerFirstWord = playerSelection.toUpperCase();
  playerFirstWord = playerFirstWord.slice(0, 1);

  let playerWin = `You Win! ${playerFirstWord + playerSelection.slice(1)} 
    beats ${computerSelection}`
  let playerLose = `You Lose! ${computerSelection} 
    beats ${playerFirstWord + playerSelection.slice(1)}`
  
  switch (playerNum - computerNum) {
    case -3:
      Round = playerWin;
      return Round;
    case 1:
      Round = playerWin;
      return Round;
    case 2:
      Round = playerWin;
      return Round;
    case -1:
      Round = playerLose;
      return Round;
    case -2:
      Round = playerLose;
      return Round;
    case 3:
      Round = playerLose;
      return Round;
    }
  return Round;
}

// const playerSelection = prompt('Enter');
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// Put playRound() inside a for loop
// Declare 2 variables, increment each time counts a win
// Display win Round

// function game() {
//   let playGame;
//   let playerPoint = 0;
//   let computerPoint = 0;
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt('Enter');
//     const computerSelection = getComputerChoice();
//     playGame = playRound(playerSelection, computerSelection);
//     console.log(playGame);
//     if (playGame.slice(4, 7) === 'Win') {
//       playerPoint++;
//     } else if (playGame.slice(4, 8) === 'Lose') {
//       computerPoint++;
//     } else { continue; }
//   }

//   if (playerPoint > computerPoint) {
//     return 'Round: Player Wins!';
//   } else if (playerPoint < computerPoint) {
//     return 'Round: Computer Wins!';
//   } else {
//     return 'Round: Draw!';
//   }
// }
// console.log(game());


const gameRound = document.querySelector('#roundResult');
const playerRound = document.querySelector('#playerRoundResult');
const computerRound = document.querySelector('#computerRoundResult');
const winner = document.querySelector('#winner');


let playerScore = 0;
let computerScore = 0;

if (playerScore > 0) {
  console.log('ok');
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
  let computerSelection = getComputerChoice();
  let rockButton = playRound('rock', computerSelection);
  gameRound.textContent = rockButton;
  if (rockButton.slice(4, 7) === 'Win') {
    playerScore++;
    playerRound.textContent = playerScore;
  }
  if (rockButton.slice(4, 8) === 'Lose') {
    computerScore++;
    computerRound.textContent = computerScore;
  }
  if (playerScore > 4 || computerScore > 4) {
    if (playerScore > computerScore) {
      winner.textContent = 'Player Wins!'
    } else if (playerScore < computerScore) {
      winner.textContent = 'Computer Wins!'
    } else if (playerScore === computerScore) {
      winner.textContent = 'Draw!'
    }};
});
  
  
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
  let computerSelection = getComputerChoice();
  let rockButton = playRound('paper', computerSelection);
  gameRound.textContent = rockButton;
  if (rockButton.slice(4, 7) === 'Win') {
    playerScore++;
    playerRound.textContent = playerScore;
  }
  if (rockButton.slice(4, 8) === 'Lose') {
    computerScore++;
    computerRound.textContent = computerScore;
  }
  if (playerScore > 4 || computerScore > 4) {
    if (playerScore > computerScore) {
      winner.textContent = 'Player Wins!'
    } else if (playerScore < computerScore) {
      winner.textContent = 'Computer Wins!'
    } else if (playerScore === computerScore) {
      winner.textContent = 'Draw!'
    }};
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
  let computerSelection = getComputerChoice();
  let rockButton = playRound('scissors', computerSelection);
  gameRound.textContent = rockButton;
  if (rockButton.slice(4, 7) === 'Win') {
    playerScore++;
    playerRound.textContent = playerScore;
  }
  if (rockButton.slice(4, 8) === 'Lose') {
    computerScore++;
    computerRound.textContent = computerScore;
  }
  if (playerScore > 4 || computerScore > 4) {
    if (playerScore > computerScore) {
      winner.textContent = 'Player Wins!'
    } else if (playerScore < computerScore) {
      winner.textContent = 'Computer Wins!'
    } else if (playerScore === computerScore) {
      winner.textContent = 'Draw!'
    }};
});
