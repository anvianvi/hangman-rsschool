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
      const quantityOfMeanings = data[0].meanings[0].definitions.length;
      const randomSelectedDefeniton = Math.floor(
        Math.random() * quantityOfMeanings
      );
      return data[0].meanings[0].definitions[randomSelectedDefeniton]
        .definition;
    } else {
      console.log("Error fetching word.");
    }
  } catch (error) {
    console.error("Error fetching word:", error);
  }
}
