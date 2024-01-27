import { checkInput } from "./game-logic";

function generateUppercaseAlphabet() {
  const alphabet = [];
  const startCharCode = 'A'.charCodeAt(0);
  const endCharCode = 'Z'.charCodeAt(0);

  for (let charCode = startCharCode; charCode <= endCharCode; charCode++) {
    const letter = String.fromCharCode(charCode);
    alphabet.push(letter);
  }

  return alphabet;
}

export function renderUppercaseKeyboard() {
  const uppercaseAlphabet = generateUppercaseAlphabet();
  const keyboardContainer = document.createElement('div')
  keyboardContainer.className = "keyboard"
  keyboardContainer.id = 'keyboard'

  uppercaseAlphabet.forEach(letter => {
    const keyElement = document.createElement('div');
    keyElement.className = "key"
    keyElement.id = `${letter}`
    keyElement.textContent = letter;
    keyboardContainer.appendChild(keyElement);

    keyElement.addEventListener('click', virtualKeybordClickListener(letter))
  });

  document.getElementById('right-part').appendChild(keyboardContainer)
}

export function virtualKeybordClickListener(letter) {
  return function () { checkInput(letter.toLocaleLowerCase()) }
}