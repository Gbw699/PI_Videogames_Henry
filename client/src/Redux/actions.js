export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const FILTER_VIDEOGAMES = "FILTER_VIDEOGAMES";
export const ORDER_VIDEOGAMES = "ORDER_VIDEOGAMES";

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

export const filterVideogames = (value) => {
  return { type: FILTER_VIDEOGAMES, payload: value };
};

export const orderVideogames = (value) => {
  return { type: ORDER_VIDEOGAMES, payload: value };
};
