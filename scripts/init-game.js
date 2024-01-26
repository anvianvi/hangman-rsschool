
import { wordLength, mysteryWord, updateMysteryWord } from "./variables";
import { fetchRandomWord } from "./api";
import { defaultWords } from "./words";
import { renderGallows } from "./gallows";
import { renderUppercaseKeyboard } from "./keybord";
import { renderMainAria } from "./game-field";
import { initRealKeyboardListeners } from "./game-logic";

export async function guessWorld() {
  let guessedWord = await fetchRandomWord(wordLength) || defaultWords[Math.floor(Math.random() * defaultWords.length)];
  updateMysteryWord(guessedWord)

  rednderGameField(mysteryWord)
};


function rednderGameField() {

  const container = document.createElement('div');
  container.className = 'game-field-container'
  container.id = 'game-field-container'

  document.body.replaceChildren(container);

  console.log(mysteryWord)
  renderGallows()

  const rightPart = document.createElement('div');
  rightPart.className = 'rightpart'
  rightPart.id = 'right-part'

  container.appendChild(rightPart)
  //game-field
  renderMainAria()
  renderUppercaseKeyboard()
  initRealKeyboardListeners()

}