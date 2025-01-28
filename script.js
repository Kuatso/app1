import posts from "./quotes.js";

// let post = Math.floor(Math.random() * posts.length);

const quoteElement = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const buttonElement = document.getElementById("generate-bt");

const gnrBtn = () => {
  const post = Math.floor(Math.random() * posts.length);
  const randomQuote = posts[post];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthor.textContent = author;
  console.log(randomQuote.author);
};

buttonElement.addEventListener("click", gnrBtn);

gnrBtn();
