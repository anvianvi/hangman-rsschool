import '/styles/global.scss'
import './scripts/words';
// import '/styles/header.scss'
// import './scripts/enjoy';
// import '/styles/enjoy.scss'
// import '/styles/about.scss'
// import '/styles/mobile-app.scss'
// import '/styles/footer.scss'

import { defaultWords } from './scripts/words';
console.log(defaultWords)

async function fetchRandomWord(length) {
  try {
    const response = await fetch(`https://random-word-api.vercel.app/api?words=1&length=${length}`);
    const data = await response.json();

    if (data && data.length > 0) {
      console.log(data)
      console.log(data[0])
    } else {
      console.log("Error fetching word.");
    }
  } catch (error) {
    console.error("Error fetching word:", error);
    console.log("Error fetching word.");
  }
}

fetchRandomWord(6)