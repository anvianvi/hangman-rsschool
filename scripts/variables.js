import { renderEndGameModal } from "./end-game-modal";

let wordLength = 6;
let mysteryWord = "error";
let incorrectGuessesCount = 0;
let lettersToGuess = 0;
let pressedLettersArr = [];
let wordDescription = 'Oops, there is some problems wothe API providing the hints, we apologize, try to guess the word without a hint or refresh the page.'

function updateWordLength(newValue) {
  wordLength = newValue;
}

function updateMysteryWord(newValue) {
  mysteryWord = newValue;
}

function updateIncorrectGuessesCount(newValue) {
  if (newValue === 0) {
    incorrectGuessesCount = newValue;
    return;
  }

  incorrectGuessesCount = newValue;
  const mistakesBox = document.querySelector(".misstakesBox");
  mistakesBox.textContent = `Incorrect guesses: ${incorrectGuessesCount}/6`;

  if (newValue === 6) {
    renderEndGameModal("lose");
  }
}

function updateLettersToGuess(newValue) {
  if (newValue === 0) {
    lettersToGuess = newValue;
    renderEndGameModal("win");
  } else {
    lettersToGuess = newValue;
  }
}

function updatePressedLettersArr(newValue) {
  pressedLettersArr.push(newValue);
}

function clearPressedLettersArr() {
  pressedLettersArr = [];
}

function updateWordDescription(newValue) {
  wordDescription = newValue;
}

export {
  wordLength,
  updateWordLength,
  mysteryWord,
  updateMysteryWord,
  incorrectGuessesCount,
  updateIncorrectGuessesCount,
  lettersToGuess,
  updateLettersToGuess,
  pressedLettersArr,
  updatePressedLettersArr,
  clearPressedLettersArr,
  wordDescription,
  updateWordDescription,
};
