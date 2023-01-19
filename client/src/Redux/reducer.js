import { GET_VIDEOGAMES } from "./actions";

const initialState = {
  allVideogames: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: [...action.payload],
      };
    default:
      return { ...state };
  }
}
