const { Videogame } = require("../db");

const getVideogames = async () => {
  const dbVideogames = await Videogame.findAll();
  if (!dbVideogames.length)
    throw Error("No hay videojuegos en la Base de datos");
  return dbVideogames;
};

module.exports = { getVideogames };
