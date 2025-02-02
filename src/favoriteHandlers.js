const toggleFavoriteIcon = (isFav, btn) => {
  btn.classList.toggle("fa", isFav);
  btn.classList.toggle("far", !isFav);
};

const showFavCard = (quote, author, container) => {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = ` 
    <p class = "quote">${quote}</p>
    <p class = "author">${author} </p>
    `;
  container.appendChild(favoriteCard);
};

const hideFavCard = (quote) => {
  const favoriteCards = document.querySelectorAll(".favorite-card");
  console.log(favoriteCards);
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
};

export { toggleFavoriteIcon, showFavCard, hideFavCard };
