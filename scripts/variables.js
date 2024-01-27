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
  if (newValue < 7) {
    incorrectGuessesCount = newValue;
    const mistakesBox = document.querySelector('.misstakesBox')
    mistakesBox.textContent = `Incorrect guesses: ${incorrectGuessesCount}/6`

  } else {
    console.log('game end')
    showModal()
  }
}

function updateLettersToGuess(newValue) {
  if (newValue === 0) {
    lettersToGuess = newValue;
    console.log('you win')
  } else {
    lettersToGuess = newValue
  }
}


export { wordLength, updateWordLength, mysteryWord, updateMysteryWord, incorrectGuessesCount, updateIncorrectGuessesCount, lettersToGuess, updateLettersToGuess };