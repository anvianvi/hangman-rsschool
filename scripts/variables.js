let wordLength = 6;
let mysteryWord = 'error'
let incorrectGuessesCount = 0

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



export { wordLength, updateWordLength, mysteryWord, updateMysteryWord, incorrectGuessesCount, updateIncorrectGuessesCount };