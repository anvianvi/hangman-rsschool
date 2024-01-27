import { renderEndGameModal } from "./end-game-modal";

let wordLength = 6;
let mysteryWord = 'error'
let incorrectGuessesCount = 0
let lettersToGuess = 0

function updateWordLength(newValue) {
  wordLength = newValue;
}

function updateMysteryWord(newValue) {
  mysteryWord = newValue;
}

function updateIncorrectGuessesCount(newValue) {
  if (newValue === 0) {
    incorrectGuessesCount = newValue;
    return
  }
  if (newValue < 7) {
    incorrectGuessesCount = newValue;
    const mistakesBox = document.querySelector('.misstakesBox')
    mistakesBox.textContent = `Incorrect guesses: ${incorrectGuessesCount}/6`

  } else {
    renderEndGameModal('lose')
  }
}

function updateLettersToGuess(newValue) {
  console.log(lettersToGuess)
  console.log(newValue)

  if (newValue === 0) {
    lettersToGuess = newValue;
    renderEndGameModal('win')

  } else {
    lettersToGuess = newValue
  }
}


export { wordLength, updateWordLength, mysteryWord, updateMysteryWord, incorrectGuessesCount, updateIncorrectGuessesCount, lettersToGuess, updateLettersToGuess };