import { container } from "./Videogames.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../Redux/actions";
// eslint-disable-next-line no-unused-vars
import Videogame from "../Videogame/Videogame";

export default function Videogames() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);
  const renderedVideogames = useSelector((state) => state.renderedVideogames);

  useEffect(() => {
    if (!allVideogames.length) {
      dispatch(getVideogames());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderedVideogames]);

  const videogame = renderedVideogames.map((videogame, index) => {
    return (
      <Videogame
        id={videogame.id}
        name={videogame.name}
        background_image={videogame.background_image}
        genres={videogame.genres}
        rating={videogame.rating}
        key={index}
      />
    );
  });

  return <div className={container}>{videogame}</div>;
}
