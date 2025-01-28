import posts from "./quotes.js";

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
  buttonFavoriteToggle.textContent = randomQuote.isFavorite
    ? "Удалить из любимых"
    : "Добавить в любимые";

  buttonFavoriteToggle.style.display = "inline-block";
};

const togleFavorite = () => {
  // posts[currentQuoteindex].isFavorite = true;
  // console.log(currentQuoteindex);
  console.log(posts[currentQuoteindex].isFavorite);
  const currentQuote = posts[currentQuoteindex];
  // console.log(currentQuote);
  currentQuote.isFavorite = !currentQuote.isFavorite;
  // if (buttonFavoriteToggle.textContent === "Добавить в любимые") {
  //   buttonFavoriteToggle.textContent = "Удалить из любимых";
  // } else {
  //   buttonFavoriteToggle.textContent = "Добавить в любимые";
  // }
  buttonFavoriteToggle.textContent = currentQuote.isFavorite
    ? "Удалить из любимых"
    : "Добавить в любимые";
  // console.log(posts);

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    favoriteCard.innerHTML = ` 
    <p class = "quote">${currentQuote.quote}</p>
    <p class = "author">${currentQuote.author} </p>
    `;
    fovaritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll(".favorite-card");
    console.log(favoriteCards);
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
};

buttonElement.addEventListener("click", gnrBtn);
buttonFavoriteToggle.addEventListener("click", togleFavorite);

gnrBtn();
