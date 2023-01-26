import {
  GET_VIDEOGAMES,
  GET_GENRES,
  FILTER_VIDEOGAMES,
  FILTER_BY_GENRE,
  ORDER_VIDEOGAMES,
  ORDER_RATING,
  SEARCH_VIDEOGAMES,
  RESET_SEARCH,
  RESET_VIDEOGAMES,
} from "./actions";

const initialState = {
  allVideogames: [],
  allGenres: [],
  renderedVideogames: [],
  toOrderRenderedVideogames: [],
  toFilterByVideogames: [],
  toFilterByGenre: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: [...action.payload],
        renderedVideogames: [...action.payload],
      };
    case GET_GENRES:
      return {
        ...state,
        allGenres: [...action.payload],
      };
    case FILTER_VIDEOGAMES:
      // 2 opciones generales que contienen otras 2 opciones cada una. "Opciones generales = Api o Db" - "Opciones de cada opción = filtrar Algunos o Todos"
      if (action.payload === "apiVideogames") {
        if (state.toFilterByGenre.length) {
          // Api => Algunos
          const copiaToFilterByVideogamesApi = [
            ...state.toFilterByVideogames.filter(
              (videogame) => typeof videogame.id === "number"
            ),
          ];
          return {
            ...state,
            renderedVideogames: [...copiaToFilterByVideogamesApi],
            toOrderRenderedVideogames: [...copiaToFilterByVideogamesApi],
            toFilterByGenre: [...copiaToFilterByVideogamesApi],
          };
        } else {
          // Api => Todos
          const copiaAllVideogamesApi = [
            ...state.allVideogames.filter(
              (videogame) => typeof videogame.id === "number"
            ),
          ];
          return {
            ...state,
            renderedVideogames: [...copiaAllVideogamesApi],
            toOrderRenderedVideogames: [...copiaAllVideogamesApi],
            toFilterByVideogames: [...state.allVideogames],
            toFilterByGenre: [...copiaAllVideogamesApi],
          };
        }
      } else {
        if (state.toFilterByGenre.length) {
          // Db => Algunos
          const copiaToFilterByVideogamesDb = [
            ...state.toFilterByVideogames.filter(
              (videogame) => typeof videogame.id !== "number"
            ),
          ];
          return {
            ...state,
            renderedVideogames: [...copiaToFilterByVideogamesDb],
            toOrderRenderedVideogames: [...copiaToFilterByVideogamesDb],
            toFilterByGenre: [...copiaToFilterByVideogamesDb],
          };
        } else {
          // Db => Todos
          const copiaAllVideogamesDb = [
            ...state.allVideogames.filter(
              (videogame) => typeof videogame.id !== "number"
            ),
          ];
          return {
            ...state,
            renderedVideogames: [...copiaAllVideogamesDb],
            toOrderRenderedVideogames: [...copiaAllVideogamesDb],
            toFilterByVideogames: [...state.allVideogames],
            toFilterByGenre: [...copiaAllVideogamesDb],
          };
        }
      }
    case FILTER_BY_GENRE:
      if (state.toFilterByVideogames.length) {
        const copiaToFilterByGenre = [
          ...state.toFilterByGenre.filter((videogame) => {
            return videogame.genres.some((obj) => obj.name === action.payload);
          }),
        ];
        return {
          ...state,
          renderedVideogames: [...copiaToFilterByGenre],
          toOrderRenderedVideogames: [...copiaToFilterByGenre],
          toFilterByVideogames: [...copiaToFilterByGenre],
        };
      } else {
        const copiaAllVideogames = [
          ...state.allVideogames.filter((videogame) => {
            return videogame.genres.some((obj) => obj.name === action.payload);
          }),
        ];
        return {
          ...state,
          renderedVideogames: [...copiaAllVideogames],
          toOrderRenderedVideogames: [...copiaAllVideogames],
          toFilterByGenre: [...state.allVideogames],
          toFilterByVideogames: [...copiaAllVideogames],
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
    case RESET_VIDEOGAMES:
      return {
        ...state,
        renderedVideogames: [...state.allVideogames],
        toOrderRenderedVideogames: [],
        toFilterByVideogames: [],
        toFilterByGenre: [],
      };
    default:
      return { ...state };
  }
}
