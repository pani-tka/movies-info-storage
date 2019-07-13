export const SEARCH_TEXT_CHANGED = 'SEARCH_TEXT_CHANGED';
export const FETCH_MOVIE_LIST_SUCCESS = 'FETCH_MOVIE_LIST_SUCCESS';
export const FETCH_SINGLE_MOVIE_SUCCESS = 'FETCH_SINGLE_MOVIE_SUCCESS';
export const SELECT_MOVIE = 'SELECT_MOVIE';

export const searchTextChanged = queryText => ({
  type: 'SEARCH_TEXT_CHANGED',
  queryText
});

const fetchMovieListSuccess = data => ({
  type: FETCH_MOVIE_LIST_SUCCESS,
  movies: data
});

export const fetchMovies = () => (dispatch) => {
  
  fetch( `http://localhost:8080/movies`)
      .then(response => response.json())
      .then(response => {
        dispatch(fetchMovieListSuccess(response))
      })
};

const fetchSingleMovieSuccess = movie => ({
  type: 'FETCH_SINGLE_MOVIE_SUCCESS',
  movie: movie
});

export const fetchSingleMovie = () => (dispatch, getState) => {
  const {queryText} = getState()

  fetch( `http://localhost:8080/movies/${queryText}`)
      .then(response => response.json())
      .then(response => {
        dispatch(fetchSingleMovieSuccess(response))
      })
};

export const selectMovie = movieId => ({
  type: SELECT_MOVIE,
  movieId
});