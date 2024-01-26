import { mysteryWord } from "./variables";

export function renderMainAria() {

  const wordBox = document.createElement('div')
  wordBox.className = 'word-box'

  for (let index = 0; index < mysteryWord.length; index++) {
    wordBox.appendChild(generateLetterBox(index))

  }

  document.getElementById('right-part').appendChild(wordBox)
}

function generateLetterBox(index) {

  const box = document.createElement('div')
  box.className = 'letter-box'
  box.id = `letter-${index}`

  return box
}


