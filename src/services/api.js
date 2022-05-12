const getToResultJson = () => {
  return fetch("question_base.json")
    .then((response) => response.json())
    .then((response) => {
      return response.map((responseTest) => {
        return {
          question: responseTest.question,
          answer: responseTest.answer,
          wrongAnswer: responseTest.wrong_answer,
          wrongAnswer2: responseTest.wrong_answer2,
          image: responseTest.image,
        };
      });
    });
};

export default getToResultJson;
