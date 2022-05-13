const getToResultJson = () => {
  return fetch("question_base.json")
    .then((response) => response.json())
    .then((response) => {
      return response.map((test) => {
        return {
          question: test.question,
          answer: test.answer,
          wrongAnswer: test.wrong_answer,
          wrongAnswer2: test.wrong_answer2,
          image: test.image,
        };
      });
    });
};

export default getToResultJson;
