import '/styles/global.scss'
import '/styles/start-screen.scss'



import { defaultWords } from './scripts/words';
// import { wordLength } from './scripts/variables';
import { fetchRandomWord } from './scripts/api';
import { renderStartScreen } from './scripts/start-screen';


renderStartScreen()

let mysteryWord = await fetchRandomWord(6) || defaultWords[Math.floor(Math.random() * defaultWords.length)];

console.log(mysteryWord)

