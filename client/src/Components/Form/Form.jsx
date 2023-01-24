import { useEffect } from "react";
import { useState } from "react";
import { validation } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../Redux/actions";
import { NavLink } from "react-router-dom";

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
  }, []);

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
      <NavLink to="/home">
        <button>Return to home</button>
      </NavLink>
      <br />
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        value={data.name}
        name="name"
        onChange={handleInputChange}
        placeholder="Ingresar nombre"
      />
      {errors.name && <p>{errors.name}</p>}
      <br />
      <label htmlFor="description">Description: </label>
      <textarea
        value={data.description}
        name="description"
        onChange={handleInputChange}
        placeholder="Ingresar descripción"
      />
      {errors.description && <p>{errors.description}</p>}
      <br />
      <label htmlFor="released">Released: </label>
      <input
        type="text"
        value={data.released}
        name="released"
        onChange={handleInputChange}
        placeholder="Ingresar fecha de lanzamiento"
      />
      {errors.released && <p>{errors.released}</p>}
      <br />
      <label htmlFor="rating">Rating: </label>
      <input
        type="number"
        value={data.rating}
        name="rating"
        onChange={handleInputChange}
        placeholder="Ingresar rating"
      />
      {errors.rating && <p>{errors.rating}</p>}
      {/* ---------------------------genres------------------------------------ */}
      <div>
        <h3>Add genres</h3>
        {allGenres?.map((obj, index) => {
          return (
            <label htmlFor={obj.name} key={index}>
              {obj.name}
              <input
                type="checkbox"
                name="genres"
                value={obj.name}
                onChange={handleInputGenres}
              />
              <br />
            </label>
          );
        })}
      </div>
      {/* ---------------------------platforms--------------------------------- */}
      <div>
        <h3>Add platforms</h3>
        <label htmlFor="PC">PC</label>
        <input
          type="checkbox"
          name="platforms"
          value="PC"
          onChange={handleInputPlatfomrs}
        />
        <br />
        <label htmlFor="Console">Console</label>
        <input
          type="checkbox"
          name="platforms"
          value="Console"
          onChange={handleInputPlatfomrs}
        />
        <br />
        <label htmlFor="Mobile">Mobile</label>
        <input
          type="checkbox"
          name="platforms"
          value="Mobile"
          onChange={handleInputPlatfomrs}
        />
        <br />
      </div>
      <button type="submit" onClick={handleSubmit}>Crear videojuego</button>
    </form>
  );
}
