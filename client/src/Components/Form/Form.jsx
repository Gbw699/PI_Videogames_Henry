import { useState } from "react";
import { validation } from "./validation";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    description: "",
    released: "",
    rating: null,
    //genres[0].name
    genres: [],
    //platforms[0].platform.name
    platforms: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    released: "",
    rating: null,
    //genres[0].name
    genres: [],
    //platforms[0].platform.name
    platforms: [],
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors(validation({ ...data, [e.target.name]: e.target.value }));
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
      <label htmlFor="description">Description: </label>
      <input
        type="text"
        value={data.description}
        name="description"
        onChange={handleInputChange}
        placeholder="Ingresar descripción"
      />
      <label htmlFor="released">Released: </label>
      <input
        type="text"
        value={data.released}
        name="released"
        onChange={handleInputChange}
        placeholder="Ingresar fecha de lanzamiento"
      />
      <label htmlFor="rating">Rating: </label>
      <input
        type="number"
        value={data.rating}
        name="rating"
        onChange={handleInputChange}
        placeholder="Ingresar rating"
      />
    </form>
  );
}
