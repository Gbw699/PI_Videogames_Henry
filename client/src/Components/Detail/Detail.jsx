import { useEffect } from "react";
import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";

export default function Detail() {
  const { detailId } = useParams();
  const [videogame, setVideogame] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/videogames/${detailId}`)
      .then((response) => response.json())
      .then((data) => {
        setVideogame(data);
      })
      .catch((err) => window.alert(`${err.message}`));
    return () => {
      setVideogame({});
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>{videogame.name}</h1>
      <NavLink to={"/home"}>
        <button>Return to home</button>
      </NavLink>
      <div>
        <img src={videogame.background_image} alt="img" />
      </div>
      <p value="description">{videogame.description_raw}</p>
      <ul>
        {videogame.genres?.map((obj) => {
          return <li key={obj.name}>{obj.name}</li>;
        })}
      </ul>
      <p value="released">{videogame.released}</p>
      <p value="rating">{videogame.rating}</p>
      <ul>
        {videogame.platforms?.map((obj) => {
          if (obj.platform) {
            return <li key={obj.platform.name}>{obj.platform.name}</li>;
          } else {
            return <li key={obj}>{obj}</li>;
          }
        })}
      </ul>
    </div>
  );
}
