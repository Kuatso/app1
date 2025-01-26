const posts = [
  "Лучше быть богатым чем бедным",
  "Лучше иметь 100 биткойнов чем сто баксов",
  "Надо было закупиться битками в 2010",
  "Хранить крипту в холодном кошельке",
];

// let post = Math.floor(Math.random() * posts.length);

const quoteElement = document.getElementById("quote");
const buttonElement = document.getElementById("generate-bt");

const gnrBtn = () => {
  const post = Math.floor(Math.random() * posts.length);
  const randomQuote = posts[post];
  quoteElement.textContent = randomQuote;
};

buttonElement.addEventListener("click", gnrBtn);

gnrBtn();
