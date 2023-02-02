import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css";
import img from "../../Img/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg";

export default function LandingPage(props) {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img className={style.img} src={img} alt="img" />
      </div>
      <NavLink to={"/home"}>
        <button className={style.btn}>Enter</button>
      </NavLink>
    </div>
  );
}

//imagen de fondo representativa al proyecto
//Botón para ingresar al home
