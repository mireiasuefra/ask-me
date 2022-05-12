import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getToResultJson from "../services/api";
import LandingPage from "./LandingPage";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

function App() {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    getToResultJson().then((response) => {
      setQuestions(response);
    });
  }, []);

  return (
    // HTML ✨
    <div className="bg">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route>
          <Header />
          <main>
            <Route exact path="/question">
              <Card />
            </Route>
          </main>
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
