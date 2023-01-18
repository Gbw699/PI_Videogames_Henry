//Funciones encargadas de conseguir los videojuegos de la base de datos

const { Videogame } = require("../../db");

const getDbVideogames = async () => {
  const arrayDbVideogames = await Videogame.findAll();
  return arrayDbVideogames;
};

const getDbVideogameByPk = async (id) => {
  const result = await Videogame.findByPk(id);
  return result;
};

module.exports = {
  getDbVideogames,
  getDbVideogameByPk,
};
