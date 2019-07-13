import {
  SEARCH_TEXT_CHANGED,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_SINGLE_MOVIE_SUCCESS

} from './actions';

const initialState = {
  queryText: '',
  movies: [],
  movie: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TEXT_CHANGED: {
      const nextState = {
        ...state,
        queryText: action.queryText
      };

      return nextState;
    }
    case FETCH_MOVIE_LIST_SUCCESS: {
      const nextState = {
        ...state,
        movies: action.movies
      };

      return nextState;
    }
    case FETCH_SINGLE_MOVIE_SUCCESS: {
      const nextState = {
        ...state,
        movie: action.movie
      };

      return nextState;
    }
    default:
      return state;
  }
}