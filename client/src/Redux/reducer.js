import {
  GET_VIDEOGAMES,
  FILTER_VIDEOGAMES,
  ORDER_VIDEOGAMES,
  ORDER_RATING,
} from "./actions";

const initialState = {
  allVideogames: [],
  renderedVideogames: [],
  filteredVideogames: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: [...action.payload],
        renderedVideogames: [...action.payload],
        filteredVideogames: [...action.payload],
      };
    case FILTER_VIDEOGAMES:
      if (action.payload === "apiVideogames") {
        return {
          ...state,
          renderedVideogames: [
            ...state.filteredVideogames.filter(
              (videogame) => typeof videogame.id === "number"
            ),
          ],
        };
      } else if (action.payload === "dbVideogames") {
        return {
          ...state,
          renderedVideogames: [
            ...state.filteredVideogames.filter(
              (videogame) => typeof videogame.id !== "number"
            ),
          ],
        };
      } else {
        return {
          ...state,
          renderedVideogames: [...state.allVideogames],
        };
      }
    case ORDER_VIDEOGAMES:
      if (action.payload === "upward") {
        return {
          ...state,
          renderedVideogames: [
            ...state.renderedVideogames.sort((videogame1, videogame2) => {
              return (
                videogame1.name.charCodeAt() - videogame2.name.charCodeAt()
              );
            }),
          ],
          filteredVideogames: [
            ...state.filteredVideogames.sort((videogame1, videogame2) => {
              return (
                videogame1.name.charCodeAt() - videogame2.name.charCodeAt()
              );
            }),
          ],
        };
      } else if (action.payload === "downward") {
        return {
          ...state,
          renderedVideogames: [
            ...state.renderedVideogames.sort((videogame1, videogame2) => {
              return (
                videogame2.name.charCodeAt() - videogame1.name.charCodeAt()
              );
            }),
          ],
          filteredVideogames: [
            ...state.filteredVideogames.sort((videogame1, videogame2) => {
              return (
                videogame2.name.charCodeAt() - videogame1.name.charCodeAt()
              );
            }),
          ],
        };
      } else {
        return {
          ...state,
          renderedVideogames: [...state.filteredVideogames],
          filteredVideogames: [...state.allVideogames],
        };
      }
    case ORDER_RATING:
      if (action.payload === "upward") {
        return {
          ...state,
          renderedVideogames: [
            ...state.renderedVideogames.sort((videogame1, videogame2) => {
              return videogame1.rating - videogame2.rating;
            }),
          ],
          filteredVideogames: [
            ...state.filteredVideogames.sort((videogame1, videogame2) => {
              return videogame1.rating - videogame2.rating;
            }),
          ],
        };
      } else if (action.payload === "downward") {
        return {
          ...state,
          renderedVideogames: [
            ...state.renderedVideogames.sort((videogame1, videogame2) => {
              return videogame2.rating - videogame1.rating;
            }),
          ],
          filteredVideogames: [
            ...state.filteredVideogames.sort((videogame1, videogame2) => {
              return videogame2.rating - videogame1.rating;
            }),
          ],
        };
      } else {
        return {
          ...state,
          renderedVideogames: [...state.filteredVideogames],
          filteredVideogames: [...state.allVideogames],
        };
      }
    default:
      return { ...state };
  }
}
