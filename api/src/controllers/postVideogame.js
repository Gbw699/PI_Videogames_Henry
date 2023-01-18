const { Videogame, Genre } = require("../db");

const postVideogame = async (
  name,
  description,
  released,
  rating,
  platforms,
  genres
) => {
  const newVideogame = await Videogame.create({
    name,
    description,
    released,
    rating,
    platforms,
  });

  await newVideogame.createGenre(genres);
  //puede ser que haya que cambiar createGenre por setGenre() cuando estén los generos en la base de datos

  return { success: "El personaje fue creado" };
};

module.exports = {
  postVideogame,
};
