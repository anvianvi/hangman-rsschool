import { mysteryWord, updateIncorrectGuessesCount } from "./variables";
import { renderStartScreen } from "./start-screen";

export function renderEndGameModal(result) {
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.className = 'modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content-container';

  const heading = document.createElement('h2')
  const textLine1 = document.createElement('p')
  const textLine2 = document.createElement('p')

  if (result === "win") {
    heading.textContent = 'You Win!'
    textLine1.textContent = `Mystery Word - ${mysteryWord}`
    textLine2.textContent = 'Let\'s play again?'
  } else {
    heading.textContent = 'You Lose'
    heading.style.color = 'red'
    textLine1.textContent = `Mystery Word - ${mysteryWord}`
    textLine2.textContent = 'Let\'s play again?'
  }

  modalContent.appendChild(heading)
  modalContent.appendChild(textLine1)
  modalContent.appendChild(textLine2)

  const startNewGame = document.createElement('button');
  startNewGame.className = 'start-new-game-button button ';
  startNewGame.innerHTML = 'Play Again';
  startNewGame.onclick = playAgain;

  modalContent.appendChild(startNewGame);

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

}
function playAgain() {
  renderStartScreen()
  updateIncorrectGuessesCount(0)
}