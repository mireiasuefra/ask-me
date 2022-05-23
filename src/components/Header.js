import logoHeader from "../images/Mireia.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="header__title"> ¡Hola Mundo!</h1>
        <h2 className="header__subtitle">
          Soy Mireia y soy Frontend Developer.
        </h2>
      </div>
      <Link to="/">
        <img className="header__img" src={logoHeader} alt="Logo"></img>
      </Link>
    </header>
  );
}

export default Header;
