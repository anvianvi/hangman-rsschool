import '/styles/global.scss'

import { defaultWords } from './scripts/words';
import { fetchRandomWord } from './scripts/api';
import { renderStartScreen } from './scripts/start-screen';

let mysteryWordLength = 6

fetchRandomWord(mysteryWordLength)
renderStartScreen(mysteryWordLength)

let mysteryWord = await fetchRandomWord(mysteryWordLength) || defaultWords[Math.floor(Math.random() * defaultWords.length)];


console.log(mysteryWord)

