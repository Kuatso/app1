import posts from "./src/quotes.js";
import {
  hideFavCard,
  showFavCard,
  toggleFavoriteIcon,
} from "./src/favoriteHandlers.js";

const quoteElement = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const buttonElement = document.getElementById("generate-bt");
const buttonFavoriteToggle = document.getElementById("toggle-favorite-btn");
const fovaritesContainer = document.getElementById("fovarite-container");

let currentQuoteindex;

const gnrBtn = () => {
  currentQuoteindex = Math.floor(Math.random() * posts.length);
  const randomQuote = posts[currentQuoteindex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthor.textContent = author;
  console.log(randomQuote.author);

  toggleFavoriteIcon(randomQuote.isFavorite, buttonFavoriteToggle);

  buttonFavoriteToggle.style.display = "inline-block";
};

const togleFavorite = () => {
  console.log(posts[currentQuoteindex].isFavorite);
  const currentQuote = posts[currentQuoteindex];
  currentQuote.isFavorite = !currentQuote.isFavorite;

  toggleFavoriteIcon(currentQuote.isFavorite, buttonFavoriteToggle);

  if (currentQuote.isFavorite) {
    showFavCard(currentQuote.quote, currentQuote.author, fovaritesContainer);
  } else {
    hideFavCard(currentQuote.quote);
  }
};

buttonElement.addEventListener("click", gnrBtn);
buttonFavoriteToggle.addEventListener("click", togleFavorite);

// gnrBtn();
