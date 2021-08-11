import { SET_SEARCH_STRING } from './actions';

const initialState = {
  searchString: 'Batman'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_STRING:
      return {...state,  searchString: action.searchString};
    default:
      return state;
  }
};