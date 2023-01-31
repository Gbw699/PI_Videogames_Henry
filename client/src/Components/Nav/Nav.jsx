import style from "./Nav.module.css";
import {
  filterVideogames,
  filterByGenre,
  orderVideogames,
  orderRating,
  searchVideogames,
  resetSearch,
  resetVideogames,
  getGenres,
} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);
  const [videogame, setVideogame] = useState("");

  useEffect(() => {
    if (!allGenres.length) {
      dispatch(getGenres());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDispatchFilter = (e) => {
    dispatch(filterVideogames(e.target.value));
  };

  const handleDispatchGenre = (e) => {
    dispatch(filterByGenre(e.target.value));
  };

  const handleDispatchVideogames = (e) => {
    dispatch(orderVideogames(e.target.value));
  };

  const handleDispatchRating = (e) => {
    dispatch(orderRating(e.target.value));
  };

  const handleDispatchSearch = () => {
    dispatch(searchVideogames(videogame));
  };

  const handleReset = () => {
    document.getElementById("filter").value = "base";
    document.getElementById("genres").value = "base";
    document.getElementById("videogames").value = "base";
    document.getElementById("rating").value = "base";
    dispatch(resetVideogames());
  };
  return (
    <div className={style.container}>
      {/* Api or Db */}
      <label className={style.filterContainer} htmlFor="filter">
        Choose a Filter
        <select
          className={style.selects}
          name="filter"
          id="filter"
          onChange={handleDispatchFilter}
        >
          <option value="base" hidden={true}>
            --Display options
          </option>
          <option value="apiVideogames">Known videogames</option>
          <option value="dbVideogames">Created videogames</option>
        </select>
      </label>
      {/* Genres */}
      <label className={style.filterContainer} htmlFor="genres">
        Choose a Genre
        <select
          className={style.selects}
          name="genres"
          id="genres"
          onChange={handleDispatchGenre}
        >
          <option value="base" hidden={true}>
            --Display options
          </option>
          {allGenres?.map((obj, index) => {
            return (
              <option value={obj.name} key={index}>
                {obj.name}
              </option>
            );
          })}
        </select>
      </label>
      {/* Order by name */}
      <label className={style.filterContainer} htmlFor="videogames">
        Order by Name
        <select
          className={style.selects}
          name="videogames"
          id="videogames"
          onChange={handleDispatchVideogames}
        >
          <option className={style.options} value="base" hidden={true}>
            --Display options
          </option>
          <option value="upward">A-Z</option>
          <option value="downward">Z-A</option>
        </select>
      </label>
      {/* Order by rating */}
      <label className={style.filterContainer} htmlFor="rating">
        Order by Rating
        <select
          className={style.selects}
          name="rating"
          id="rating"
          onChange={handleDispatchRating}
        >
          <option value="base" hidden={true}>
            --Display options
          </option>
          <option value="upward">1-5</option>
          <option value="downward">5-1</option>
        </select>
      </label>
      <button className={style.btn} onClick={handleReset}>
        Reset
      </button>
      <div className={style.searchContainer}>
        <input
          className={style.input}
          type="text"
          placeholder="Videogame´s name"
          onChange={(e) =>
            e.target.value
              ? setVideogame(e.target.value)
              : dispatch(resetSearch())
          }
        />
        <button className={style.btn} onClick={handleDispatchSearch}>
          Search
        </button>
      </div>
      <NavLink to={"/form"}>
        <button className={style.btn}>Create new videogame</button>
      </NavLink>
    </div>
  );
}
