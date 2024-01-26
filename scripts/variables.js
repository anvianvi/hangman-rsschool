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

  } else {
    console.log('game end')
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