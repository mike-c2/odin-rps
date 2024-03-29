const WINNING_COLOR = 'Blue';
const LOSING_COLOR = 'palevioletred';
const TIE_COLOR = 'yellow';

const NUM_ROUNDS_PER_GAME = 5;

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
  setComputerChoiceBox('?');
  enableAllPlayerChoiceBoxes();
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
  status.textContent = 'Game Over: You Won!';
  status.style.color = WINNING_COLOR;
}

function setStatusGameComputerWin() {
  const status = document.getElementById('status');
  status.textContent = 'Game Over: You Lost';
  status.style.color = LOSING_COLOR;
}

function enableAllPlayerChoiceBoxes() {
  const playerChoices = document.querySelectorAll('#player-choice .choice');

  playerChoices.forEach(choice => {
    choice.style.cursor = 'pointer';
    choice.classList.add('active');
  });

  addPlayerRockListener();
  addPlayerPaperListener();
  addPlayerScissorsListener();
}

function addPlayerRockListener() {
  const playerRockChoice = document.getElementById('rock');

  playerRockChoice.addEventListener('click', chooseRock);
}

function addPlayerPaperListener() {
  const playerRockChoice = document.getElementById('paper');

  playerRockChoice.addEventListener('click', choosePaper);
}

function addPlayerScissorsListener() {
  const playerRockChoice = document.getElementById('scissors');

  playerRockChoice.addEventListener('click', chooseScissors);
}

function disableAllPlayerChoiceBoxes() {
  const playerChoices = document.querySelectorAll('#player-choice .choice');

  playerChoices.forEach(choice => {
    choice.style.removeProperty('cursor');
    choice.classList.remove('active');
  });

  removePlayerRockListener();
  removePlayerPaperListener();
  removePlayerScissorsListener();
}

function removePlayerRockListener() {
  const playerRockChoice = document.getElementById('rock');

  playerRockChoice.removeEventListener('click', chooseRock);
}

function removePlayerPaperListener() {
  const playerRockChoice = document.getElementById('paper');

  playerRockChoice.removeEventListener('click', choosePaper);
}

function removePlayerScissorsListener() {
  const playerRockChoice = document.getElementById('scissors');

  playerRockChoice.removeEventListener('click', chooseScissors);
}

function chooseRock() {
  const computerChoice = getComputerChoice();
  const result = playRound('Rock', computerChoice);
  const playerChoiceBox = document.querySelector('#rock p');

  setComputerChoiceBox(computerChoice);
  endRound(result, playerChoiceBox);
  endGameOnLastRound();
}

function choosePaper() {
  const computerChoice = getComputerChoice();
  const result = playRound('Paper', computerChoice);
  const playerChoiceBox = document.querySelector('#paper p');

  setComputerChoiceBox(computerChoice);
  endRound(result, playerChoiceBox);
  endGameOnLastRound();
}

function chooseScissors() {
  const computerChoice = getComputerChoice();
  const result = playRound('Scissors', computerChoice);
  const playerChoiceBox = document.querySelector('#scissors p');

  setComputerChoiceBox(computerChoice);
  endRound(result, playerChoiceBox);
  endGameOnLastRound();
}

function endRound(result, playerChoiceBox) {
  resetAllChoiceBoxBackgrounds();

  if(result > 0) {
    setStatusRoundPlayerWin();
    setComputerChoiceToLose();
    incrementPlayerScore();
    playerChoiceBox.style.backgroundColor = WINNING_COLOR;

  } else if(result < 0) {
    setStatusRoundComputerWin();
    setComputerChoiceToWin();
    incrementComputerScore();
    playerChoiceBox.style.backgroundColor = LOSING_COLOR;

  } else {
    setStatusRoundTie();
    setComputerChoiceToTie();
    incrementTieScore();
    playerChoiceBox.style.backgroundColor = TIE_COLOR;
  }
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

function setComputerChoiceBox(computerChoice) {
  const choiceBox = document.querySelector('#computer-choice .choice');
  const choice = computerChoice.toLowerCase();

  switch(choice) {
    case 'rock':
      choiceBox.textContent = 'R';
      break;
    case 'paper':
      choiceBox.textContent = 'P';
      break;
    case 'scissors':
      choiceBox.textContent = 'S';
      break;
    default:
      choiceBox.textContent = '?';
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

function endGameOnLastRound() {
  const playerScore = +document.querySelector('#player-points .points').textContent;
  const computerScore = +document.querySelector('#computer-points .points').textContent;
   
  if(playerScore < NUM_ROUNDS_PER_GAME && computerScore < NUM_ROUNDS_PER_GAME) {
    return;
  }

  disableAllPlayerChoiceBoxes();

  if(playerScore > computerScore) {
    setStatusGamePlayerWin();

  } else {
    setStatusGameComputerWin();
  }
}

addResetGameListener();
initGame();