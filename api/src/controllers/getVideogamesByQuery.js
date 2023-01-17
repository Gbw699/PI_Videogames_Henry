// //Controller de la ruta GET_videogames.js. Se encarga de devolver un array con los 15 primeros videojuegos, tanto de la DB como de la api

const { getApiVideogames } = require("./utils/getApiVideogames");
const { getDbVideogames } = require("./utils/getDbVideogames");

const getVideogamesByQuery = (name) => {
  const arrayApiVideogames = getApiVideogames();
  const arrayDbVideogames = getDbVideogames();
};

module.exports = {
  getVideogamesByQuery,
};
