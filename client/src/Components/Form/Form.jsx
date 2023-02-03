import style from "./Form.module.css";
import img from "../../Img/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg";
import { useEffect } from "react";
import { useState } from "react";
import { validation } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideogames } from "../../Redux/actions";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Form() {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);

  const [data, setData] = useState({
    name: "",
    description: "",
    released: "",
    rating: 0.0,
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
  });

  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    if (!allGenres.length) {
      dispatch(getGenres());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors(validation({ ...data, [e.target.name]: e.target.value }));
  };
  const handleInputGenres = (e) => {
    //genres[0].name
    if (!e.target.checked)
      setGenres([...genres.filter((element) => element !== e.target.value)]);
    else setGenres([...genres, e.target.value]);
  };
  const handleInputPlatfomrs = (e) => {
    //platforms[0].platform.name
    if (!e.target.checked)
      setPlatforms([
        ...platforms.filter((element) => element !== e.target.value),
      ]);
    else setPlatforms([...platforms, e.target.value]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const objectToPost = {
      ...data,
      platforms: [...platforms],
      genres: [...genres],
    };
    if (errors.name || errors.description || errors.released || errors.rating) {
      return window.alert("Debe completar correctamente el formulario");
    } else if (
      !data.name ||
      !data.description ||
      !data.released ||
      !data.rating ||
      !genres.length ||
      !platforms.length
    ) {
      return window.alert("Debe completar todos los campos del formulario");
    } else {
      return (async () => {
        try {
          const response = await axios.post("/videogames", { ...objectToPost });
          window.alert(
            response.data.success ? response.data.success : response.data.error
          );
        } catch (err) {
          window.alert(err.message);
        }
        dispatch(getVideogames());
      })();
    }
  };

  return (
    <div className={style.imgContainer}>
      <img className={style.img} src={img} alt="img" />
      <div className={style.container}>
        <h1 className={style.title}>Create Videogames</h1>
        <NavLink to="/home">
          <button className={style.btn}>Return to home</button>
        </NavLink>
        <form className={style.inputsContainer} onSubmit={handleSubmit}>
          <div className={style.inputContainer}>
            <label className={style.subtitles} htmlFor="name">
              Name
            </label>
            <input
              className={style.input}
              type="text"
              value={data.name}
              name="name"
              onChange={handleInputChange}
              placeholder="Enter name"
            />
            {errors.name && <p className={style.spans}>{errors.name}</p>}
          </div>
          <div className={style.inputContainer}>
            <label className={style.subtitles} htmlFor="description">
              Description
            </label>
            <textarea
              className={style.input}
              value={data.description}
              name="description"
              onChange={handleInputChange}
              placeholder="Enter description"
            />
            {errors.description && (
              <p className={style.spans}>{errors.description}</p>
            )}
          </div>
          <div className={style.inputContainer}>
            <label className={style.subtitles} htmlFor="released">
              Released
            </label>
            <input
              className={style.input}
              type="text"
              value={data.released}
              name="released"
              onChange={handleInputChange}
              placeholder="Enter released date"
            />
            {errors.released && (
              <p className={style.spans}>{errors.released}</p>
            )}
          </div>
          <div className={style.inputContainer}>
            <label className={style.subtitles} htmlFor="rating">
              Rating
            </label>
            <input
              className={style.input}
              type="number"
              value={data.rating}
              name="rating"
              onChange={handleInputChange}
            />
            {errors.rating && <p className={style.spans}>{errors.rating}</p>}
          </div>
          {/* ---------------------------genres------------------------------------ */}
          <div className={style.inputContainer}>
            <label className={style.subtitles}>Add genres</label>
            <div className={style.genresContainer}>
              {allGenres?.map((obj, index) => {
                return (
                  <label
                    className={style.genrePlatformsLabel}
                    htmlFor={obj.name}
                    key={index}
                  >
                    {obj.name}
                    <input
                      type="checkbox"
                      name="genres"
                      id={obj.name}
                      value={obj.name}
                      onChange={handleInputGenres}
                    />
                  </label>
                );
              })}
            </div>
          </div>
          {/* ---------------------------platforms--------------------------------- */}
          <div className={style.inputContainer}>
            <label className={style.subtitles}>Add platforms</label>
            <div className={style.platfomrsContainer}>
              <label className={style.genrePlatformsLabel} htmlFor="PC">
                PC
                <input
                  type="checkbox"
                  name="platforms"
                  id="PC"
                  value="PC"
                  onChange={handleInputPlatfomrs}
                />
              </label>

              <label className={style.genrePlatformsLabel} htmlFor="Console">
                Console
                <input
                  type="checkbox"
                  name="platforms"
                  id="Console"
                  value="Console"
                  onChange={handleInputPlatfomrs}
                />
              </label>

              <label className={style.genrePlatformsLabel} htmlFor="Mobile">
                Mobile
                <input
                  type="checkbox"
                  name="platforms"
                  id="Mobile"
                  value="Mobile"
                  onChange={handleInputPlatfomrs}
                />
              </label>
            </div>
          </div>
          <button
            className={style.btnCreate}
            type="submit"
            onClick={handleSubmit}
          >
            Create Videogame
          </button>
        </form>
      </div>
    </div>
  );
}
