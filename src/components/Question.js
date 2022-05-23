import Answer from "./Answer";

function Question(props) {
  const renderAnswers = () => {
    return props.question.answers.map((oneAnswer) => {
      return (
        <Answer
          key={oneAnswer.id}
          message={oneAnswer.text}
          isRight={oneAnswer.isRight}
        />
      );
    });
  };

  return (
    <div className="question">
      <h2 className="question__title"> Oye Mireia...</h2>
      <h3 className="question__text">{props.question.question}</h3>
      <img
        className="question__image"
        src={`images/${props.question.image}`}
        alt="imagen de la pregunta"
      ></img>
      <div className="question__answers">
        {renderAnswers()}
      </div>
    </div>
  );
}

export default Question;
