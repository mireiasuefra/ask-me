function Card(props) {
  console.log(props);

  return (
    <div className="card">
      <h3 className="card__question">{props.question.question}</h3>
      <img className="card__image" src={`images/${props.question.image}`} alt="imagen de la card"></img>
      <div className="card__answers">
      <p className="card__answer">{props.question.answer}</p>
      <p className="card__answer">{props.question.wrongAnswer}</p>
      <p className="card__answer">{props.question.wrongAnswer2}</p>
      </div>
    </div>
  );
}

export default Card;
