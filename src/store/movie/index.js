import { SET_MOVIE, SET_MOVIE_DETAIL, SET_SEARCHED_MOVIE } from './actions';

const movieState = {
  movieCount: 0,
  movieList: [],
  movieDetail: {}
};

export default (state = movieState, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return {...state,  movieList: [...state.movieList, ...action.movie.Search], movieCount: action.movie.totalResults};
    case SET_SEARCHED_MOVIE:
      return {...state,  movieList: action.movie.Search, movieCount: action.movie.totalResults};
    case SET_MOVIE_DETAIL:
      return {...state, movieDetail: action.detail}
    default:
      return state;
  }
};