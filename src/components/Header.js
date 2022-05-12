import logoHeader from "../images/Mireia.png";

function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="header__title"> ¡Hola Mundo!</h1>
        <h2 className="header__subtitle">
          Soy Mireia y soy Frontend Developer.
        </h2>
      </div>
      <img
        className="header__img"
        src={logoHeader}
        alt="Logo Harry Potter"
      ></img>
    </header>
  );
}

export default Header;
