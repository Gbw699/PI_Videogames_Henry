// //Controller de la ruta GET_videogames.js. Se encarga de devolver un array con los 15 primeros videojuegos, tanto de la DB como de la api

const { getApiVideogames } = require("./utils/getApiVideogames");
const { getDbVideogames } = require("./utils/getDbVideogames");

const getVideogamesByQuery = async (name) => {
  const arrayApiVideogames = await getApiVideogames();
  const arrayDbVideogames = await getDbVideogames();
  let arrayAllVideogames = [...arrayDbVideogames, ...arrayApiVideogames];

  arrayAllVideogames = arrayAllVideogames.filter((obj) =>
    obj.name.toLowerCase().includes(name.toLowerCase())
  );

  if (!arrayAllVideogames.length) throw Error("No se encontraron coincidencias")

  return arrayAllVideogames.slice(0, 15);
};

module.exports = {
  getVideogamesByQuery,
};
