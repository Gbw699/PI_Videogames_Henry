//Controller de la ruta GET_videogames.js. Se encarga de devolver un array con todos los videojuegos, tanto de la DB como de la api

const { getApiVideogames } = require("./utils/getInfoFromApi");
const { getDbVideogames } = require("./utils/getInfoFromDb");

const getVideogames = async () => {
  const arrayDbVideogames = await getDbVideogames();
  const arrayApiVideogames = await getApiVideogames();
  return [...arrayDbVideogames, ...arrayApiVideogames];
};

module.exports = { getVideogames };
