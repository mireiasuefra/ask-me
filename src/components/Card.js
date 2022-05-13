function Card(props) {
  console.log(props)

  return (
    <>
      <h3>{props.question.question}</h3>
      <img src={`images/${props.question.image}`} alt="imagen de la card"></img>
      <p>{props.question.answer}</p>
      <p>{props.question.wrongAnswer}</p>
      <p>{props.question.wrongAnswer2}</p>
    </>
  );
}

export default Card;
