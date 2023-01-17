//Controller de la ruta GET_videogames.js. Se encarga de devolver un array con todos los videojuegos, tanto de la DB como de la api

const { getDbVideogames } = require("./utils/getDbVideogames");
const { getApiVideogames } = require("./utils/getApiVideogames");

const getVideogames = async () => {
  //const arrayDbVideogames = await getDbVideogames();
  const arrayApiVideogames = await getApiVideogames()
  // if (!arrayDbVideogames.length)
  //   throw Error("No hay videojuegos en la Base de datos");
  return arrayApiVideogames;
};

module.exports = { getVideogames };
