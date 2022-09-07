function getComputerChoice() {
//Randomly generate a number
//Assign the number to a variable
let choiceNum = Math.floor(Math.random() * 3);
//Assign the generated number to Rock/Paper/Scissors
//Return either Rock/Paper/Scissors
switch (choiceNum) {
  case 0:
    return 'Rock';
  case 1:
    return 'Paper';
  case 2:
    return 'Scissors';
}};
console.log(getComputerChoice());