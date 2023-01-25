import {
  GET_VIDEOGAMES,
  GET_GENRES,
  FILTER_VIDEOGAMES,
  FILTER_BY_GENRE,
  ORDER_VIDEOGAMES,
  ORDER_RATING,
  SEARCH_VIDEOGAMES,
  RESET_SEARCH,
} from "./actions";

const initialState = {
  allVideogames: [],
  allGenres: [],
  renderedVideogames: [],
  toOrderRenderedVideogames: [],
  toFilterRenderedVideogames: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: [...action.payload],
        renderedVideogames: [...action.payload],
        toOrderRenderedVideogames: [...action.payload],
        toFilterRenderedVideogames: [...action.payload],
      };
    case GET_GENRES:
      return {
        ...state,
        allGenres: [...action.payload],
      };
    case FILTER_VIDEOGAMES:
      if (action.payload === "apiVideogames") {
        return {
          ...state,
          renderedVideogames: [
            ...state.toFilterRenderedVideogames.filter(
              (videogame) => typeof videogame.id === "number"
            ),
          ],
          toOrderRenderedVideogames: [
            ...state.toFilterRenderedVideogames.filter(
              (videogame) => typeof videogame.id === "number"
            ),
          ],
        };
      } else if (action.payload === "dbVideogames") {
        return {
          ...state,
          renderedVideogames: [
            ...state.toFilterRenderedVideogames.filter(
              (videogame) => typeof videogame.id !== "number"
            ),
          ],
          toOrderRenderedVideogames: [
            ...state.toFilterRenderedVideogames.filter(
              (videogame) => typeof videogame.id !== "number"
            ),
          ],
        };
      } else {
        return {
          ...state,
          renderedVideogames: [...state.toFilterRenderedVideogames],
        };
      }
    case FILTER_BY_GENRE:
      if (action.payload !== "base") {
        return {
          ...state,
          renderedVideogames: [
            ...state.toFilterRenderedVideogames.filter((videogame) => {
              return videogame.genres.some(
                (obj) => obj.name === action.payload
              );
            }),
          ],
        };
      } else {
        return {
          ...state,
          renderedVideogames: [...state.toFilterRenderedVideogames],
        };
      }
    case ORDER_VIDEOGAMES:
      if (action.payload === "upward") {
        return {
          ...state,
          renderedVideogames: [
            ...state.toOrderRenderedVideogames.sort(
              (videogame1, videogame2) => {
                return (
                  videogame1.name.charCodeAt() - videogame2.name.charCodeAt()
                );
              }
            ),
          ],
          // toFilterRenderedVideogames: [
          //   ...state.toFilterRenderedVideogames.sort((videogame1, videogame2) => {
          //     return (
          //       videogame1.name.charCodeAt() - videogame2.name.charCodeAt()
          //     );
          //   }),
          // ],
        };
      } else if (action.payload === "downward") {
        return {
          ...state,
          renderedVideogames: [
            ...state.toOrderRenderedVideogames.sort(
              (videogame1, videogame2) => {
                return (
                  videogame2.name.charCodeAt() - videogame1.name.charCodeAt()
                );
              }
            ),
          ],
          // toFilterRenderedVideogames: [
          //   ...state.toFilterRenderedVideogames.sort((videogame1, videogame2) => {
          //     return (
          //       videogame2.name.charCodeAt() - videogame1.name.charCodeAt()
          //     );
          //   }),
          // ],
        };
      } else {
        return {
          ...state,
          renderedVideogames: [...state.toOrderRenderedVideogames],
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
          // toFilterRenderedVideogames: [
          //   ...state.toFilterRenderedVideogames.sort(
          //     (videogame1, videogame2) => {
          //       return videogame1.rating - videogame2.rating;
          //     }
          //   ),
          // ],
        };
      } else if (action.payload === "downward") {
        return {
          ...state,
          renderedVideogames: [
            ...state.renderedVideogames.sort((videogame1, videogame2) => {
              return videogame2.rating - videogame1.rating;
            }),
          ],
          // toFilterRenderedVideogames: [
          //   ...state.toFilterRenderedVideogames.sort(
          //     (videogame1, videogame2) => {
          //       return videogame2.rating - videogame1.rating;
          //     }
          //   ),
          // ],
        };
      } else {
        return {
          ...state,
          renderedVideogames: [...state.toOrderRenderedVideogames],
        };
      }
    case SEARCH_VIDEOGAMES:
      return {
        ...state,
        renderedVideogames: [...action.payload],
      };
    case RESET_SEARCH:
      return {
        ...state,
        renderedVideogames: [...state.toFilterRenderedVideogames],
      };
    default:
      return { ...state };
  }
}
