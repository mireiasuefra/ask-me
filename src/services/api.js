const getToResultJson = () => {
  return fetch("question_base.json")
    .then((response) => response.json())
    .then((response) => {
      return response.map((test) => {
        return {
          question: test.question,
          image: test.image,
          answers: test.answers
        };
      });
    });
};

export default getToResultJson;
