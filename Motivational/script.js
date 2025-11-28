

let quote = document.getElementById(".quote");
let author = document.getElementById(".author");
let newQuoteBtn = document.getElementById(".new-quote");

// Fetch a motivational quote
async function getQuote() {
  quoteText.textContent = "Loading...";
  authorText.textContent = "";

  try {
    const res = await fetch("https://api.realinspire.live/v1/quotes/random");
    const data = await res.json();

    quote.textContent = `"${data.content}"`;
    author.textContent = `— ${data.author}`;
  } catch (error) {
    console.error(error);
    quote.textContent = "Oops! Something went wrong.";
    author.textContent = "";
  }
}

newQuoteBtn.addEventListener("click", getQuote);

getQuote();



// let quote = document.querySelector(".quote");
// let author = document.querySelector(".author");
// let newquote = document.querySelector(".new-quote");

// fetch("https://api.realinspire.live/v1/quotes/random")
//   .then((res) => {
//     console.log(res.status);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     quote.textContent = data.content;
//     author.textContent = data.author;
//     // email.textContent = data.email;
//   })
//   .catch((error) => console.error(error));