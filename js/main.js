"use strict";

console.log("hola");

const questionElement = document.querySelector(".js-question");
const button = document.querySelector(".button");

let questions;
let index = 0;

function fetchQuestion() {
  fetch("../question_base.json")
    .then((response) => response.json())
    .then((data) => {
      questions = data;
      const element = data[index];
      questionElement.innerHTML = renderHTML(element);
    });
}

function renderHTML(data) {
  let htmlCode = `<h2 class="question__title">${data.question}</h2>`;
  htmlCode += ` <img class="question__img" src="../images/${data.image}" alt="javascript">`;
  htmlCode += `<p class="question__answer">${data.answer}</p>`;
  htmlCode += `<p class="question__answer">${data.wrong_answer}</p>`;
  htmlCode += `<p class="question__answer">${data.wrong_answer2}</p>`;

  return htmlCode;
}

function hanleClickNext(event) {
  event.preventDefault();
  if (index < questions.length - 1) {
    const element = questions[++index];
    questionElement.innerHTML = renderHTML(element);
  }
}

button.addEventListener("click", hanleClickNext);
fetchQuestion();
