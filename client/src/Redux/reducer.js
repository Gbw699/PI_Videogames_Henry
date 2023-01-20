import { GET_VIDEOGAMES, FILTER_VIDEOGAMES, ORDER_VIDEOGAMES } from "./actions";

const initialState = {
  allVideogames: [],
  filteredVideogames: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: [...action.payload],
        filteredVideogames: [...action.payload],
      };
    case FILTER_VIDEOGAMES:
      if (action.payload === "apiVideogames") {
        return {
          ...state,
          filteredVideogames: [
            ...state.allVideogames.filter(
              (videogame) => typeof videogame.id === "number"
            ),
          ],
        };
      } else if (action.payload === "dbVideogames") {
        return {
          ...state,
          filteredVideogames: [
            ...state.allVideogames.filter(
              (videogame) => typeof videogame.id !== "number"
            ),
          ],
        };
      } else {
        return {
          ...state,
          filteredVideogames: [...state.allVideogames],
        };
      };
    case ORDER_VIDEOGAMES:
      if (action.payload === "upward") {
        return {
          allVideogames: [
            ...state.allVideogames.sort((videogame1, videogame2) => {
              return videogame1.name.charCodeAt() - videogame2.name.charCodeAt();
            }),
          ],
          filteredVideogames: [
            ...state.filteredVideogames.sort((videogame1, videogame2) => {
              return videogame1.name.charCodeAt() - videogame2.name.charCodeAt();
            }),
          ],
        };
      } else if (action.payload === "downward") {
        return {
          allVideogames: [
            ...state.allVideogames.sort((videogame1, videogame2) => {
              return videogame2.name.charCodeAt() - videogame1.name.charCodeAt();
            }),
          ],
          filteredVideogames: [
            ...state.filteredVideogames.sort((videogame1, videogame2) => {
              return videogame2.name.charCodeAt() - videogame1.name.charCodeAt();
            }),
          ],
        };
      } else {
        return {
          ...state,
          filteredVideogames: [...state.allVideogames],
        };
      };
    default:
      return { ...state };
  }
}
