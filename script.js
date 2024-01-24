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