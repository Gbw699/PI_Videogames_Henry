//Función que se encarga de conseguir los videojuegos de la api

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

module.exports = {
  getApiVideogames,
};
