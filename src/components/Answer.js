import { useState, useEffect } from "react";

function Answer(props) {
  const [showResult, setShowResult] = useState(false);
  const resultClass = props.isRight ? "answer--right" : "answer--wrong"

  useEffect(() => {
    setShowResult(false)
  }, [props.message]);

  const handleClick = () => {
    showResult ? setShowResult(false) : setShowResult(true);
  };

  return (
    <p
      className={`answer ${showResult ? resultClass : ""}`}
      onClick={handleClick}
    >
      {props.message}
    </p>
  );
}

export default Answer;

