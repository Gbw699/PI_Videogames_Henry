//Controller de la ruta GET_videogames_{id}.js. Se encarga de devolver un objeto con el resultado de la busqueda de un videojuego determinado, realizada en la api o en la DB

const axios = require("axios");
const { API_KEY, Videogame } = require("../db");
const {getApiVideogameById} = require("./utils/getApiVideogames")
const {getDbVideogameByPk} = require("./utils/getDbVideogames")

const getVideogameById = async (id) => {
  let result = {};
  try {
    const videogame = await getApiVideogameById(id);
    result = {
      name: videogame.data.name,
      background_image: videogame.data.background_image,
      genres: videogame.data.genres,
      description: videogame.data.description,
      released: videogame.data.released,
      rating: videogame.data.rating,
      platforms: videogame.data.platforms,
    };
    return result;
  } catch (error) {
    result = await getDbVideogameByPk(id);
    if (!result)
      throw Error("No se encontró resultado con el id proporcionado");
    return result;
  }
};

module.exports = {
  getVideogameById,
};

//nombre, imagen, género, descripción, fecha de lanzamiento, rating, plataformas
