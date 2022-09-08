'use strict';

// Randomly generate a number
// Assign the number to a variable
// Assign the generated number to Rock/Paper/Scissors
// Return either Rock/Paper/Scissors
function getComputerChoice() {

let choiceNum = Math.floor(Math.random() * 3);

switch (choiceNum) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
}};

// Make player's select case-insensitive
// Result a draw if two selects equal
// Compare 2 selects, total 6 ways win or lose
// Return result
// result = playerNum - computerNum;
// Rock - Paper = -1, lose
// Paper - Scissors = -2, lose
// Scissors - Rock = 3, lose

// Rock - Scissors = -3, win
// Paper - Rock = 1, win
// Scissors - Paper = 2, win


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  let result;
  if (playerSelection === computerSelection) {
    result = 'Draw!'
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
  if (computerSelection === 'rock') {
    computerNum = 0;
  } else if (computerSelection === 'paper') {
    computerNum = 1;
  } else if (computerSelection === 'scissors') {
    computerNum = 3;
  }
  
  let playerWin = `You Win! ${playerSelection} beats ${computerSelection}`
  let playerLose = `You Lose! ${computerSelection} beats ${playerSelection}`
  switch (playerNum - computerNum) {
    case -3:
      result = playerWin;
      return result;
    case 1:
      result = playerWin;
      return result;
    case 2:
      result = playerWin;
      return result;
    case -1:
      result = playerLose;
      return result;
    case -2:
      result = playerLose;
      return result;
    case 3:
      result = playerLose;
      return result;
    }
  return result;
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// Put playRound() inside a for loop
// Declare 2 variables, increment each time counts a win
// Display win result

function game() {}
  
  // let gameEnd;
  // if (playerGame > computerGame) {
  //   gameEnd = 'Player Won!';
  // } else if (playerGame < computerGame) {
  //   gameEnd = 'Computer Won!';
  // } else {
  //   gameEnd = 'Draw!'
  // };

