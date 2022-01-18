'use strict';

// Selecting elements that will be used often
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const currentScore1El = document.getElementById('current--0');
const currentScore2El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Function helpers
const rollDice = function () {
  let die = Math.trunc(Math.random() * 6 + 1);
  return die;
};

const editDice = function (die) {
  diceEl.src = `dice-${die}.png`;
};

const hideDice = function () {
  diceEl.classList.add('hidden');
};

const addToCurrent = function () {
  return;
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Beginning of game... when user first arrive on page
hideDice();
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let isPlaying = true;

// Event handlers
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    // generate new die
    let die = rollDice();
    console.log(die);
    // display dice
    diceEl.classList.remove('hidden');
    editDice(die);
    // control flow for result of die roll
    if (die !== 1) {
      // current score of active user needs to be increased by number of die
      currentScore += die;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // change later for adding only to current player
    } else {
      // current score of active user needs to be reduced to 0 and active users switched
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      isPlaying = false;
      hideDice();
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  return;
});
