import style from "./Videogame.module.css";
import { NavLink } from "react-router-dom";

export default function Videogame(props) {
  return (
    <div className={style.container}>
      <button className={style.btn} onClick={() => props.handleDispatchClose(props.id)}>X</button>
      <NavLink to={`/detail/${props.id}`}>
        <h3 className={style.title}>{props.name}</h3>
      </NavLink>
      <div className={style.imgContainer}>
        <img
          className={style.img}
          src={props.background_image}
          loading="lazy"
          alt=""
        />
      </div>
      <div className={style.pContainer}>
        {props.genres?.map((obj) => {
          return (
            <p className={style.genre} key={obj.name}>
              {obj.name}
            </p>
          );
        })}
      </div>
      <h3 className={style.rating}>{props.rating}</h3>
    </div>
  );
}
