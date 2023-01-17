//Función que se encarga de conseguir los videojuegos de la base de datos

const { Videogame } = require("../../db");

const getDbVideogames = async () => {
  const arrayDbVideogames = await Videogame.findAll();
  return arrayDbVideogames;
};

module.exports = {
  getDbVideogames,
};
