import { useState } from "react";
import { validation } from "./validation";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    description: "",
    released: "",
    rating: 0.0,
    //genres[0].name
    //genres: [],
    //platforms[0].platform.name
    //platforms: [],
  });
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    released: "",
    rating: null,
    //genres: [],
    //platforms: [],
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors(validation({ ...data, [e.target.name]: e.target.value }));
  };
  const handleInputGenres = (e) => {
    //genres[0].name
    if (!e.target.checked)
      setGenres([...genres.filter((obj) => obj.name !== e.target.value)]);
    else setGenres([...genres, { name: e.target.value }]);
  };
  const handleInputPlatfomrs = (e) => {
    //platforms[0].platform.name
    if (!e.target.checked)
      setPlatforms([
        ...platforms.filter((obj) => obj.platform.name !== e.target.value),
      ]);
    else setPlatforms([...platforms, { platform: { name: e.target.value } }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //acá viene el dispatch al post
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        value={data.name}
        name="name"
        onChange={handleInputChange}
        placeholder="Ingresar nombre"
      />
      <br />
      <label htmlFor="description">Description: </label>
      <input
        type="text"
        value={data.description}
        name="description"
        onChange={handleInputChange}
        placeholder="Ingresar descripción"
      />
      <br />
      <label htmlFor="released">Released: </label>
      <input
        type="text"
        value={data.released}
        name="released"
        onChange={handleInputChange}
        placeholder="Ingresar fecha de lanzamiento"
      />
      <br />
      <label htmlFor="rating">Rating: </label>
      <input
        type="number"
        value={data.rating}
        name="rating"
        onChange={handleInputChange}
        placeholder="Ingresar rating"
      />
      {/* ---------------------------genres------------------------------------ */}
      <div>
        <h3>Add genres</h3>
        <label htmlFor="Action">Action</label>
        <input
          type="checkbox"
          name="genres"
          value="Action"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Indie">Indie</label>
        <input
          type="checkbox"
          name="genres"
          value="Indie"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Adventure">Adventure</label>
        <input
          type="checkbox"
          name="genres"
          value="Adventure"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="RPG">RPG</label>
        <input
          type="checkbox"
          name="genres"
          value="RPG"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Strategy">Strategy</label>
        <input
          type="checkbox"
          name="genres"
          value="Strategy"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Shooter">Shooter</label>
        <input
          type="checkbox"
          name="genres"
          value="Shooter"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Casual">Casual</label>
        <input
          type="checkbox"
          name="genres"
          value="Casual"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Simulation">Simulation</label>
        <input
          type="checkbox"
          name="genres"
          value="Simulation"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Puzzle">Puzzle</label>
        <input
          type="checkbox"
          name="genres"
          value="Puzzle"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Arcade">Arcade</label>
        <input
          type="checkbox"
          name="genres"
          value="Arcade"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Platformer">Platformer</label>
        <input
          type="checkbox"
          name="genres"
          value="Platformer"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Racing">Racing</label>
        <input
          type="checkbox"
          name="genres"
          value="Racing"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Massively Multiplayer">Massively Multiplayer</label>
        <input
          type="checkbox"
          name="genres"
          value="Massively Multiplayer"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Sports">Sports</label>
        <input
          type="checkbox"
          name="genres"
          value="Sports"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Fighting">Fighting</label>
        <input
          type="checkbox"
          name="genres"
          value="Fighting"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Family">Family</label>
        <input
          type="checkbox"
          name="genres"
          value="Family"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Board Games">Board Games</label>
        <input
          type="checkbox"
          name="genres"
          value="Board Games"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Educational">Educational</label>
        <input
          type="checkbox"
          name="genres"
          value="Educational"
          onChange={handleInputGenres}
        />
        <br />
        <label htmlFor="Card">Card</label>
        <input
          type="checkbox"
          name="genres"
          value="Card"
          onChange={handleInputGenres}
        />
      </div>
      {/* ---------------------------platforms--------------------------------- */}
      <div></div>
    </form>
  );
}
