import {
  SEARCH_TEXT_CHANGED,
  FETCH_MOVIE_LIST_SUCCESS,
  FETCH_SINGLE_MOVIE_SUCCESS,
  ADD_MOVIE,
  REMOVE_MOVIE

} from './actions';

const initialState = {
  queryText: '',
  movies: [],
  movie: [],
  movieId: '',
  title: '',
  year: '',
  format: '',
  actors: []
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
    case ADD_MOVIE: {
      const nextState = {
        ...state,
        title: action.title,
        year: action.year,
        format: action.format,
        actors: action.actors
      };

      return nextState;
    }
    case REMOVE_MOVIE: {
      const nextState = state.filter(item => item.id !== action.movieId);

      return nextState;
    }
    default:
      return state;
  }
}