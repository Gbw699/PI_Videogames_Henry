export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const FILTER_VIDEOGAMES = "FILTER_VIDEOGAMES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const ORDER_VIDEOGAMES = "ORDER_VIDEOGAMES";
export const ORDER_RATING = "ORDER_RATING";
export const SEARCH_VIDEOGAMES = "SEARCH_VIDEOGAMES";
export const RESET_SEARCH = "RESET_SEARCH";
export const RESET_VIDEOGAMES = "RESET_VIDEOGAMES";

export const getVideogames = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/videogames");
      const data = await response.json();
      dispatch({ type: GET_VIDEOGAMES, payload: data });
    } catch (error) {
      return window.alert(
        "No se pudo hacer el pedido de videojuegos al servidor"
      );
    }

    // fetch("http://localhost:3001/videogames")
    //  .then((response) => response.json())
    //  .then((data) => {
    //    if (data.error) window.alert(data.error);
    //    else dispatch({ type: GET_VIDEOGAMES, payload: data });
    //  });
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/genres");
      const data = await response.json();
      dispatch({ type: GET_GENRES, payload: data });
    } catch (error) {
      return window.alert("No se pudo hacer el pedido de géneros al servidor");
    }

    //  fetch("http://localhost:3001/genres")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.error) window.alert(data.error);
    //     else dispatch({ type: GET_GENRES, payload: data });
    //   });
  };
};

export const filterVideogames = (value) => {
  return { type: FILTER_VIDEOGAMES, payload: value };
};

export const filterByGenre = (value) => {
  return { type: FILTER_BY_GENRE, payload: value };
};

export const orderVideogames = (value) => {
  return { type: ORDER_VIDEOGAMES, payload: value };
};

export const orderRating = (value) => {
  return { type: ORDER_RATING, payload: value };
};

export const searchVideogames = (value) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:3001/videogames?name=${value}`
      );
      const data = await response.json();
      dispatch({ type: SEARCH_VIDEOGAMES, payload: data });
    } catch (error) {
      return window.alert("No hay resultados que coinsidan con la busqueda");
    }

    //  fetch(`http://localhost:3001/videogames?name=${value}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.error) window.alert(data.error);
    //     else dispatch({ type: SEARCH_VIDEOGAMES, payload: data });
    //   });
  };
};

export const resetSearch = () => {
  return { type: RESET_SEARCH };
};

export const resetVideogames = () => {
  return { type: RESET_VIDEOGAMES };
};
