function getComputerChoice() {
//Randomly generate a number
//Assign the number to a variable
let choiceNum = Math.floor(Math.random() * 3);
//Assign the generated number to Rock/Paper/Scissors
//Return either Rock/Paper/Scissors
switch (choiceNum) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
}};

//Make player's select case-insensitive
//Result a draw if two selects equal
//Compare 2 selects, total 6 ways win or lose
//Return result
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    let result = 'Draw!';
    return result;
  }

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    let result = 'You Lose! Paper beats Rock'
    return result;
  }

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    let result = 'You Win! Rock beats Scissors'
    return result;
  }

  if (playerSelection === 'paper' && computerSelection === 'rock') {
    let result = 'You Win! Paper beats Rock'
    return result;
  }

  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    let result = 'You Lose! Scissors beats Paper'
    return result;
  }

  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    let result = 'You Lose! Rock beats Scissors'
    return result;
  }

  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    let result = 'You Win! Scissors beats Paper'
    return result;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));