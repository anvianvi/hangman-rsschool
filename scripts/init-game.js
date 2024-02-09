import {
  wordLength,
  mysteryWord,
  updateMysteryWord,
  updateLettersToGuess,
  incorrectGuessesCount,
  wordDescription,
  updateWordDescription,
} from "./variables";
import { fetchRandomWord, fetchWordDescription } from "./api";
import { defaultWords } from "./words";
import { renderGallows } from "./gallows";
import { renderUppercaseKeyboard } from "./keybord";
import { renderMainAria } from "./game-field";
import { initRealKeyboardListeners } from "./game-logic";

export async function guessWorld() {
  let guessedWord =
    (await fetchRandomWord(wordLength)) ||
    defaultWords[Math.floor(Math.random() * defaultWords.length)];
  let guessedWordDescription =
    (await fetchWordDescription(guessedWord)) || wordDescription;
  updateWordDescription(guessedWordDescription);
  updateMysteryWord(guessedWord);
  updateLettersToGuess(mysteryWord.length);
  rednderGameField();
}

function rednderGameField() {
  const container = document.createElement("div");
  container.className = "game-field-container";
  container.id = "game-field-container";

  document.body.replaceChildren(container);

  console.log(mysteryWord);
  renderGallows();

  const rightPart = document.createElement("div");
  rightPart.className = "rightpart";
  rightPart.id = "right-part";

  const tipBox = document.createElement("p");
  tipBox.className = "tip-box";
  tipBox.textContent = wordDescription;
  rightPart.appendChild(tipBox);

  container.appendChild(rightPart);
  renderMainAria();

  const mistakesBox = document.createElement("div");
  mistakesBox.className = "misstakesBox";
  mistakesBox.textContent = `Incorrect guesses: ${incorrectGuessesCount}/6`;
  rightPart.appendChild(mistakesBox);

  renderUppercaseKeyboard();
  initRealKeyboardListeners();
}
