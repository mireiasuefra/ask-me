import logoFarewell from "../images/farewell.jpg";

function Thanks() {
  return (
    <div className="thanks">
      <p className="thanks__text">
        Sé que estás ahí, empresa que busca perfiles juniors cargados de
        motivación y con muchas ganas de darlo todo en un trabajo.
      </p>
      <img className="thanks__image" src={logoFarewell} alt="Logo"></img>
      <p className="thanks__thanks">¡GRACIAS!</p>
    </div>
  );
}

export default Thanks;
