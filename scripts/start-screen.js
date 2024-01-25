export function renderStartScreen(wordLength = 6) {
  const body = document.body;

  const container = document.createElement("div");
  container.classList.add("start-screen-container");

  const startButton = document.createElement("button");
  startButton.innerText = "Start";

  const decreaseButton = document.createElement("button");
  decreaseButton.innerText = "-";

  const wordLengthLabel = document.createElement("span");
  wordLengthLabel.id = "wordLength";
  wordLengthLabel.innerText = `${wordLength}`;

  const increaseButton = document.createElement("button");
  increaseButton.innerText = "+";

  container.appendChild(startButton);
  container.appendChild(document.createTextNode("Word Length:"));
  container.appendChild(decreaseButton);
  container.appendChild(wordLengthLabel);
  container.appendChild(increaseButton);

  body.replaceChildren(container);
}