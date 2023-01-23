import {imgContainer, img} from "./Videogame.module.css";
import { NavLink } from "react-router-dom";

export default function Videogame(props) {
  return (
    <div className="container">
      <div className={imgContainer}>
        <img className={img} src={props.background_image} alt="img" />
      </div>
      <NavLink to={`/detail/${props.id}`}>
      <h3>{props.name}</h3>
      </NavLink>
      <h2>{props.rating}</h2>
    </div>
  );
}
