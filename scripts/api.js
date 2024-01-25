export async function fetchRandomWord(length) {
  try {
    const response = await fetch(`https://random-word-api.vercel.app/api?words=1&length=${length}`);
    const data = await response.json();

    if (data && data.length > 0) {
      return data[0]
    } else {
      console.log("Error fetching word.");
    }
  } catch (error) {
    console.error("Error fetching word:", error);
  }
}