import style from "./Detail.module.css";
import img from "../../Img/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg";
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
    <div className={style.imgContainerBack}>
      <img src={img} alt="" />
      <div className={style.container}>
        <h1 className={style.title}>{videogame.name}</h1>
        <NavLink to={"/home"}>
          <button className={style.btn}>Return to home</button>
        </NavLink>
        <div className={style.detailContainer}>
          <div className={style.imgContainer}>
            <img
              className={style.img}
              src={videogame.background_image}
              alt=""
            />
          </div>
          <div className={style.dataContainer}>
            <div className={style.descriptionContainer}>
              <h2 className={style.subtitles}>Description</h2>
              <p className={style.pTexts} value="description">
                {videogame.description_raw
                  ? videogame.description_raw
                  : videogame.description}
              </p>
            </div>
            <div className={style.smallDataContainer}>
              <div className={style.verySmallContainers}>
                <h2 className={style.subtitles}>Genres</h2>
                <ul className={style.lists}>
                  {videogame.genres?.map((obj) => {
                    return <li key={obj.name}>{obj.name}</li>;
                  })}
                </ul>
              </div>
              <div className={style.verySmallContainers}>
                <h2 className={style.subtitles}>Released</h2>
                <p className={style.pTexts} value="released">
                  {videogame.released}
                </p>
              </div>
              <div className={style.verySmallContainers}>
                <h2 className={style.subtitles}>Rating</h2>
                <p className={style.pTexts} value="rating">
                  {videogame.rating}
                </p>
              </div>
              <div className={style.verySmallContainers}>
                <h2 className={style.subtitles}>Platforms</h2>
                <ul className={style.lists}>
                  {videogame.platforms?.map((obj) => {
                    if (obj.platform) {
                      return (
                        <li key={obj.platform.name}>{obj.platform.name}</li>
                      );
                    } else {
                      return <li key={obj}>{obj}</li>;
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
