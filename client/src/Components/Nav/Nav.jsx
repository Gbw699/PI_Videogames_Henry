import style from "./Nav.module.css";
import {
  filterVideogames,
  filterByGenre,
  orderVideogames,
  orderRating,
  searchVideogames,
  resetSearch,
  resetVideogames,
} from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const dispatch = useDispatch();
  const [videogame, setVideogame] = useState("");

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
          <option value="Action">Action</option>
          <option value="Indie">Indie</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Strategy</option>
          <option value="Shooter">Shooter</option>
          <option value="Casual">Casual</option>
          <option value="Simulation">Simulation</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Arcade">Arcade</option>
          <option value="Platformer">Platformer</option>
          <option value="Racing">Racing</option>
          <option value="Massively Multiplayer">Massively Multiplayer</option>
          <option value="Sports">Sports</option>
          <option value="Fighting">Fighting</option>
          <option value="Family">Family</option>
          <option value="Board Games">Board Games</option>
          <option value="Educational">Educational</option>
          <option value="Card">Card</option>
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
      <button className={style.btn} onClick={handleReset}>
        Reset
      </button>
      <NavLink to={"/form"}>
        <button className={style.btn}>Create new videogame</button>
      </NavLink>
    </div>
  );
}
