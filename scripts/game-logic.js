import { incorrectGuessesCount, mysteryWord, updateIncorrectGuessesCount, } from "./variables";

export function initRealKeyboardListeners() {
  document.addEventListener('keyup', function (event) {
    let pressedKey = event.code.slice(3).toLocaleLowerCase()
    checkInput(pressedKey)
  })
}

export function checkInput(simpol) {
  console.log(mysteryWord)
  console.log(simpol)
  if (mysteryWord.includes(simpol)) {
    console.log('there is this smpol in word')

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