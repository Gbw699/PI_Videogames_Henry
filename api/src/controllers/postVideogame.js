// Controller que se encarga de crear un videojuego en la base de datos

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

  const genreDb = await Genre.findAll({ where: { name: genres } });

  newVideogame.addGenre(genreDb);

  return { success: "El videojuego fue creado" };
};

module.exports = {
  postVideogame,
};
