export async function fetchRandomWord(length) {
  try {
    const response = await fetch(
      `https://random-word-api.vercel.app/api?words=1&length=${length}`
    );
    const data = await response.json();

    if (data && data.length > 0) {
      return data[0];
    } else {
      console.log("Error fetching word.");
    }
  } catch (error) {
    console.error("Error fetching word:", error);
  }
}

export async function fetchWordDescription(word) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();

    if (data && data.length > 0) {
      const allDefenitions = data[0].meanings[0].definitions;
      const quantityOfMeanings = allDefenitions.length;
      const randomNumber = Math.floor(Math.random() * quantityOfMeanings);
      const selectedDefenition = allDefenitions[randomNumber].definition;

      return selectedDefenition.slice(0, -1);
    } else {
      console.log("Error fetching word.");
    }
  } catch (error) {
    console.error("Error fetching word:", error);
  }
}
