import {imgContainer, img} from "./Videogame.module.css";

export default function Videogame(props) {
  return (
    <div className="container">
      <div className={imgContainer}>
        <img className={img} src={props.background_image} alt="img" />
      </div>
      <h3>{props.name}</h3>
    </div>
  );
}
