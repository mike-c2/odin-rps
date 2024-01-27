const WINNING_COLOR = 'Blue';
const LOSING_COLOR = 'palevioletred';
const TIE_COLOR = 'yellow';

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

function setComputerChoiceToLose() {
  const choiceBox = document.querySelector('#computer-choice .choice');

  choiceBox.style.backgroundColor = LOSING_COLOR;
}

function setComputerChoiceToWin() {
  const choiceBox = document.querySelector('#computer-choice .choice');

  choiceBox.style.backgroundColor = WINNING_COLOR;
}

function setComputerChoiceToTie() {
  const choiceBox = document.querySelector('#computer-choice .choice');

  choiceBox.style.backgroundColor = TIE_COLOR;
}

function incrementPlayerScore() {
  const score = document.querySelector('#player-points .points');

  incrementScore(score);
}

function incrementComputerScore() {
  const score = document.querySelector('#computer-points .points');

  incrementScore(score);
}

function incrementTieScore() {
  const score = document.querySelector('#tie-points .points');

  incrementScore(score);
}

function incrementScore(scoreElement) {
  let points = +scoreElement.textContent + 1;

  scoreElement.textContent = points;
}

function setStatusRoundPlayerWin() {
  const status = document.getElementById('status');
  status.textContent = 'You won the round!';
  status.style.color = WINNING_COLOR;
}

function setStatusRoundComputerWin() {
  const status = document.getElementById('status');
  status.textContent = 'You lost the round';
  status.style.color = LOSING_COLOR;
}

function setStatusRoundTie() {
  const status = document.getElementById('status');
  status.textContent = 'The round is a tie';
  status.style.color = TIE_COLOR;
}

function setStatusGamePlayerWin() {
  const status = document.getElementById('status');
  status.textContent = 'You won the game!';
  status.style.color = WINNING_COLOR;
}

function setStatusGameComputerWin() {
  const status = document.getElementById('status');
  status.textContent = 'You lost the game';
  status.style.color = LOSING_COLOR;
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