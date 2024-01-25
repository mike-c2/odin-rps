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

function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  let ties = 0;

  for(let i = 0; i < 5; i++) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    console.log(`Player has chosen: ${playerChoice}`);
    console.log(`Computer has chosen: ${computerChoice}`);

    let result = playRound(playerChoice, computerChoice);

    if(result > 0) {
      console.log('Player wins this round');
      playerPoints++;
    } else if(result < 0) {
      console.log('Computer wins this round');
      computerPoints++;
    } else {
      console.log('This round is a tie');
      ties++;
    }
  }

  console.log('Final Score:\n');
  console.log(`    Player: ${playerPoints}`);
  console.log(`  Computer: ${computerPoints}`);
  console.log(`      Ties: ${ties}\n`);
  
  if(playerPoints > computerPoints) {
    console.log('Player Wins!');
  } else if(playerPoints < computerPoints) {
    console.log('Computer Wins');
  } else {
    console.log('The game is a tie');
  }
}