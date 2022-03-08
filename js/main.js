"use strict";

console.log("hola");

const questionElement = document.querySelector(".js-question");
const button = document.querySelector(".button");

let questions = [];
let index = 0;

function fetchQuestion() {
  fetch("../question_base.json")
    .then((response) => response.json())
    .then((data) => {
      questions = data;
      const element = data[index];
      paintQuestion(element);
    });
}
 
function renderHTML(data) {
  let htmlCode = `<h2 class="question__title">${data.question}</h2>`;
  htmlCode += ` <img class="question__img" src="../images/${data.image}" alt="javascript">`;
  htmlCode += `<p class="question__answer js-answer">${data.answer}</p>`;
  htmlCode += `<p class="question__answer js-answer">${data.wrong_answer}</p>`;
  htmlCode += `<p class="question__answer js-answer">${data.wrong_answer2}</p>`;
  return htmlCode;
}

function addAnswerListeners() {
  const answers =  document.querySelectorAll(".js-answer");
  for (let index = 0; index < answers.length; index++) {
    const element = answers[index];
    element.addEventListener('click', handleClickAnswer);
  }
}

function handleClickAnswer(event) {
  event.preventDefault();
  const answer = event.currentTarget.innerHTML;
  const question = questions[index];

  console.log('answer', answer);
  console.log('question.answer', question.answer);

  if (answer === question.answer) {
    //console.log('ES CORRECTO')
    event.currentTarget.classList.add('question__answer--right')
  } else {
    //console.log('ES INCORRECTO')
    event.currentTarget.classList.toggle('question__answer--wrong')
  }

}

function paintQuestion(element) {
  questionElement.innerHTML = renderHTML(element);
  addAnswerListeners();
}

function hanleClickNext(event) {
  event.preventDefault();
  if (index < questions.length - 1) {
    const element = questions[++index];
    paintQuestion(element);
  }
}

button.addEventListener("click", hanleClickNext);
fetchQuestion();
