//Controller de la ruta GET_videogames_{id}.js. Se encarga de devolver un objeto con el resultado de la busqueda de un videojuego determinado, realizada en la api o en la DB
const isUUID = require("is-uuid");
const { getApiVideogameById } = require("./utils/getApiVideogames");
const { getDbVideogameByPk } = require("./utils/getDbVideogames");

const getVideogameById = async (id) => {
  let result = isUUID.v4(id)
    ? await getDbVideogameByPk(id)
    : await getApiVideogameById(id);
  if (!result) throw Error("No se encontró el videojuego en la base de datos");
  return result;
};

module.exports = {
  getVideogameById,
};
