let wordLength = 6;
let mysteryWord = 'error'

function updateWordLength(newValue) {
  wordLength = newValue;
}

function updateMysteryWord(newValue) {
  mysteryWord = newValue;
}

export { wordLength, updateWordLength, mysteryWord, updateMysteryWord };