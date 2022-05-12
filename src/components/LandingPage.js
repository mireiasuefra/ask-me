import logoHeader from "../images/Mireia.png";
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
      <main>
        <Link className="landing-page__link" to="/question">
          ¡Pincha y sabrás un poquito mas sobre mi!
        </Link>
      </main>
    </>
  );
}

export default LandingPage;
