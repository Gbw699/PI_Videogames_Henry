import { imgContainer, img } from "./Videogame.module.css";
import { NavLink } from "react-router-dom";

export default function Videogame(props) {
  return (
    <div className="container">
      <NavLink to={`/detail/${props.id}`}>
        <h3>{props.name}</h3>
      </NavLink>
      <div className={imgContainer}>
        <img className={img} src={props.background_image} alt="img" />
      </div>
      <ul>
        {props.genres?.map((obj) => {
          return <li key={obj.name}>{obj.name}</li>;
        })}
      </ul>
      <h2>{props.rating}</h2>
    </div>
  );
}
