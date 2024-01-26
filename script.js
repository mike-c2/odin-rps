const WINNING_BG_COLOR = 'Blue';
const LOSING_BG_COLOR = 'palevioletred';
const TIE_BG_COLOR = 'yellow';

/* 
  Provides an easy way to reset the game by
  just pressing the Escape key.
*/
function addResetGameListener() {
  window.addEventListener('keydown', (e) => {
    if(e.code === 'Escape') {
      initGame();
    }
  });
}

function initGame() {
  resetScore();
  resetStatus();
  resetAllChoiceBoxBackgrounds();
}

function resetScore() {
  const pointsList = document.querySelectorAll('.points');

  pointsList.forEach(point => {
    point.textContent = 0;
  });
}

function resetStatus() {
  const status = document.getElementById('status');

  status.textContent = 'Ready to Play!';
  status.style.removeProperty('color');
}

function resetAllChoiceBoxBackgrounds() {
  const choiceBoxes = document.querySelectorAll('.choice');

  choiceBoxes.forEach(box => {
    box.style.backgroundColor = 'lightgray';
  });
}

function setStatusRoundPlayerWin() {
  const status = document.getElementById('status');
  status.textContent = 'You won the round!';
  status.style.color = 'lightgreen';
}

function setStatusRoundComputerWin() {
  const status = document.getElementById('status');
  status.textContent = 'You lost the round';
  status.style.color = 'red';
}

function setStatusRoundTie() {
  const status = document.getElementById('status');
  status.textContent = 'The round is a tie';
  status.style.color = 'yellow';
}

function setStatusGamePlayerWin() {
  const status = document.getElementById('status');
  status.textContent = 'You won the game!';
  status.style.color = 'lightgreen';
}

function setStatusGameComputerWin() {
  const status = document.getElementById('status');
  status.textContent = 'You lost the game';
  status.style.color = 'red';
}

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

addResetGameListener();
initGame();