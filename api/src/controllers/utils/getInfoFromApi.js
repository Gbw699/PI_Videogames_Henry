//Funciones encargadas de conseguir información de la api
const axios = require("axios");
const { API_KEY } = require("../../db");

let urlsArray = [];
for (let i = 1; i <= 5; i++) {
  urlsArray.push(
    axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
  );
}

const getApiVideogames = async () => {
  let arrayVideogames = [];
  const results = await Promise.all(urlsArray);
  results.forEach(
    (result) => (arrayVideogames = [...arrayVideogames, ...result.data.results])
  );
  return arrayVideogames;
};

const getApiVideogameById = async (id) => {
  const result = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
  );
  return {
    name: result.data.name,
    background_image: result.data.background_image,
    genres: result.data.genres,
    description: result.data.description,
    released: result.data.released,
    rating: result.data.rating,
    platforms: result.data.platforms,
  };
  //nombre, imagen, género, descripción, fecha de lanzamiento, rating, plataformas
};

const getApiGenres = async () => {
  const genres = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  return genres.data.results;
};

module.exports = {
  getApiVideogames,
  getApiVideogameById,
  getApiGenres,
};
