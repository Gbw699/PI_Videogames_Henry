import { NavLink } from "react-router-dom";

export default function LandingPage(props) {
  return (
    <>
      <NavLink to={"/home"}>
        <button>Ingresar</button>
      </NavLink>
    </>
  );
}

//imagen de fondo representativa al proyecto
//Botón para ingresar al home
