import { incorrectGuessesCount, lettersToGuess, mysteryWord, updateIncorrectGuessesCount, updateLettersToGuess, } from "./variables";

export function initRealKeyboardListeners() {
  document.addEventListener('keyup', function (event) {
    let pressedKey = event.code.slice(3).toLocaleLowerCase()
    checkInput(pressedKey)
  })
}

export function checkInput(simbol) {
  console.log(mysteryWord)
  console.log(simbol)
  if (mysteryWord.includes(simbol)) {
    console.log('there is this smpol in word')
    let x = findLetterIndexes(simbol)
    console.log(x)
    showLetter(x, simbol)

  } else {
    updateIncorrectGuessesCount(incorrectGuessesCount + 1)
    updateGallows(incorrectGuessesCount)
  }
}

function updateGallows(errorsCount) {
  let parts = []
  parts.push(document.querySelector('#parts-head'))
  parts.push(document.querySelector('#parts-body'))
  parts.push(document.querySelector('#parts-left-arm'))
  parts.push(document.querySelector('#parts-right-arm'))
  parts.push(document.querySelector('#parts-left-leg'))
  parts.push(document.querySelector('#parts-right-leg'))
  for (let index = 0; index < errorsCount; index++) {
    parts[index].style.opacity = 1
  }
}

function findLetterIndexes(letter) {
  const indexes = [];
  for (let i = 0; i < mysteryWord.length; i++) {
    if (mysteryWord[i] === letter) {
      indexes.push(i);
    }
  }
  return indexes;
}


function showLetter(indexes, letter) {
  indexes.forEach(element => {
    console.log(element)
    let letterBox = document.getElementById(`letter-${element}`)
    letterBox.textContent = letter
    letterBox.style.borderBottom = 0
    updateLettersToGuess(lettersToGuess - 1)

  });
  // indexes.forEach((element) => {
  // });
}
