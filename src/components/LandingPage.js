import logoHeader from "../images/logo-header.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <header className="landing-page">
        <div>
          <h1 className="landing-page__title"> ¡Hola Mundo!</h1>
          <h2 className="landing-page__subtitle">
            Soy Mireia y soy Frontend Developer.
          </h2>
        </div>
        <img className="landing-page__img" src={logoHeader} alt="Logo"></img>
      </header>
      <main className="landing-page__main">
        <Link to="/question">
          <button className="landing-page__button">¡Conóceme!</button>
        </Link>
        <small className="landing-page__note">
          Son unas preguntas para conocerme un poquito mejor 😊
        </small>
      </main>
    </>
  );
}

export default LandingPage;
