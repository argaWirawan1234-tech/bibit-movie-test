import { SET_MOVIE, SET_MOVIE_DETAIL } from './actions';

const movieState = {
  movieList: [],
  movieDetail: {}
};

export default (state = movieState, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return {...state,  movieList: [...state.movieList, ...action.movie]};
    case SET_MOVIE_DETAIL:
      return {...state, movieDetail: action.detail}
    default:
      return state;
  }
};