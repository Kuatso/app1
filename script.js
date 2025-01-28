const posts = [
  {
    quote: "Лучше быть богатым чем бедным",
    author: "Keke",
  },
  {
    quote: "Лучше иметь 100 биткойнов чем сто баксов",
    author: "Keke",
  },
  {
    quote: "Надо было закупиться битками в 2010",
    author: "Keke",
  },
  {
    quote: "Хранить крипту в холодном кошельке",
    author: "Keke",
  },
  {
    quote: "Всё начинается с первого биткойна",
    author: "Keke",
  },
  {
    quote: "Держи свои ключи при себе",
    author: "Keke",
  },
  {
    quote: "Не торопись продавать — торопись покупать",
    author: "Keke",
  },
  {
    quote: "Мемы — это тоже валюта",
    author: "Keke",
  },
  {
    quote: "Эфир — это новая нефть",
    author: "Keke",
  },
  {
    quote: "Криптобезопасность — это твоя ответственность",
    author: "Keke",
  },
  {
    quote: "HODL спасёт мир",
    author: "Keke",
  },
  {
    quote: "Крипта любит терпеливых",
    author: "Keke",
  },
];

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
