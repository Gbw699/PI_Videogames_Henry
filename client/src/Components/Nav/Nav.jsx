import {
  filterVideogames,
  filterByGenre,
  orderVideogames,
  orderRating,
  searchVideogames,
  resetSearch,
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

  return (
    <div>
      <label htmlFor="filter">Choose a Filter: </label>
      <select name="filter" id="filter" onChange={handleDispatchFilter}>
        <option value="base">--Please choose an option--</option>
        <option value="apiVideogames">Known videogames</option>
        <option value="dbVideogames">Created videogames</option>
      </select>
      <label htmlFor="genres">Choose a Genre: </label>
      <select name="genres" id="genres" onChange={handleDispatchGenre}>
        <option value="base">--Please choose an option--</option>
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
      <label htmlFor="videogames">Order by Name: </label>
      <select
        name="videogames"
        id="videogames"
        onChange={handleDispatchVideogames}
      >
        <option value="base">--Please choose an option--</option>
        <option value="upward">A-Z</option>
        <option value="downward">Z-A</option>
      </select>
      <label htmlFor="rating">Order by Rating: </label>
      <select name="rating" id="rating" onChange={handleDispatchRating}>
        <option value="base">--Please choose an option--</option>
        <option value="upward">1-5</option>
        <option value="downward">5-1</option>
      </select>
      <input
        type="text"
        placeholder="Videogame´s name"
        onChange={(e) =>
          e.target.value
            ? setVideogame(e.target.value)
            : dispatch(resetSearch())
        }
      />
      <button onClick={handleDispatchSearch}>Search</button>
      <NavLink to={"/form"}>
        <button>Create new videogame</button>
      </NavLink>
    </div>
  );
}
