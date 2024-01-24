function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  switch(choice) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    default:
      return 'Scissors';
  }
}

function getPlayerChoice() {
  let choice;

  do {
    choice = prompt("Enter Rock, Paper, or Scissors:");
    // This is needed in case the player clicks the 'Cancel' button
    choice = choice ?? '';
    choice = choice.trim().toLowerCase();
  } while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors');

  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

/*
  Returns:
    1 if the player wins
    0 if it's a tie
    -1 if the computer wins.
*/
function playRound(playerChoice, computerChoice) {
  if(playerChoice === computerChoice) {
    return 0;
  }

  if(playerChoice === 'Rock' && computerChoice === 'Scissors') {
    return 1;
  }

  if(playerChoice === 'Paper' && computerChoice === 'Rock') {
    return 1;
  }

  if(playerChoice === 'Scissors' && computerChoice === 'Paper') {
    return 1;
  }

  return -1;
}