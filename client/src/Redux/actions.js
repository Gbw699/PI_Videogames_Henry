const axios = require("axios");

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

export const getVideogames = () => {
  return async (dispatch) => {
    await fetch("http://localhost:3001/videogames")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) window.alert(data.error);
        else dispatch({ type: GET_VIDEOGAMES, payload: data });
      });
  };
};
