//Funciones encargadas de conseguir información de la base de datos

const { Videogame, Genre } = require("../../db");

const getDbVideogames = async () => {
  const arrayDbVideogames = await Videogame.findAll();
  return arrayDbVideogames;
};

const getDbVideogameByPk = async (id) => {
  const result = await Videogame.findByPk(id);
  return result;
};

const getDbGenres = async () => {
  const result = await Genre.findAll();
  return result;
};

module.exports = {
  getDbVideogames,
  getDbVideogameByPk,
  getDbGenres,
};
