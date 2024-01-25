import { wordLength, updateWordLength } from './variables';
import { guessWorld } from './init-game';

export function renderStartScreen() {
  const container = document.createElement('div');
  container.className = 'start-screen-container'

  const h1 = document.createElement('h1')
  h1.innerText = 'Hello in Hangman!'

  container.appendChild(h1)
  const welcomTextLine1 = document.createElement('p')
  welcomTextLine1.innerHTML = 'We will think a word and then you should guess it letter by letter'

  const welcomTextLine2 = document.createElement('p')
  welcomTextLine2.innerHTML = 'You will have 6 attempts to guess and then you lose. Good Luck!'

  container.appendChild(welcomTextLine1)
  container.appendChild(welcomTextLine2)

  const gameStartContainer = document.createElement('div');
  gameStartContainer.className = 'buttons-container'
  container.appendChild(gameStartContainer)

  const lengthLable = document.createElement('span')
  lengthLable.innerText = 'Word Length:'

  const decreaseButton = document.createElement('button');
  decreaseButton.className = 'button'
  decreaseButton.innerText = '-';

  const wordLengthLabel = document.createElement('span');
  wordLengthLabel.className = 'wordLength'
  wordLengthLabel.id = 'wordLength';
  wordLengthLabel.innerText = `${wordLength}`;

  const increaseButton = document.createElement('button');
  increaseButton.className = 'button'
  increaseButton.innerText = '+';

  gameStartContainer.appendChild(lengthLable);
  gameStartContainer.appendChild(decreaseButton);
  gameStartContainer.appendChild(wordLengthLabel);
  gameStartContainer.appendChild(increaseButton);

  const startButton = document.createElement('button');
  startButton.className = 'button'
  startButton.innerText = 'Start';

  container.appendChild(startButton);

  document.body.replaceChildren(container);

  decreaseButton.addEventListener('click', function () {
    if (wordLength > 4) {
      updateWordLength(wordLength - 1)
      updateWordLengthLabel();
    }
  });

  increaseButton.addEventListener('click', function () {
    if (wordLength < 10) {
      updateWordLength(wordLength + 1)
      updateWordLengthLabel();
    }
  });

  function updateWordLengthLabel() {
    wordLengthLabel.innerText = wordLength;
  }

  startButton.addEventListener('click', function () {
    guessWorld()
  });
  guessWorld()
}