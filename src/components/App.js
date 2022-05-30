import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import getToResultJson from "../services/api";
import LandingPage from "./LandingPage";
import Header from "./Header";
import Footer from "./Footer";
import Question from "./Question";
import Thanks from "./Thanks";

function App() {
  const [questions, setQuestions] = useState([]);
  const [qestionsIndex, setQuestionsIndex] = useState(0);
  const history = useHistory();
  const hasQuestions = questions.length > 0;

  useEffect(() => {
    getToResultJson().then((response) => {
      setQuestions(response);
    });
  }, []);

  const onClick = () => {
    if (qestionsIndex < questions.length - 1) {
      setQuestionsIndex(qestionsIndex + 1);
    } else {
      history.push("/thanks");
    }
  };

  return (
    // HTML ✨
    <div className="bg">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route>
          <Header />
          <main className="main">
            <Route exact path="/question">
              {hasQuestions ? (
                <Question question={questions[qestionsIndex]} />
              ) : null}
              <button className="button-next" onClick={onClick}> Siguiente</button>
            </Route>

            <Route exact path="/thanks">
              <Thanks />
            </Route>
          </main>
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
