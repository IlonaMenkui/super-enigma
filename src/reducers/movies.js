import { MOVIES } from '../constants/actions';

const defaultState = {
  movies: [],
  totalResults: 0,
  isLoading: false,
  isSearchChange: false,
  searchQuery: '',
};

const movies = (state = defaultState, action) => {
  switch (action.type) {
    case MOVIES.LOAD_SUCCESS:
      return {
        ...action.payload,
      };
    case MOVIES.SEARCH:
      return {
        ...state,
        ...action.payload,
      };
    case MOVIES.SEARCH_RESET:
      return {
        ...state,
        searchQuery: '',
        isLoading: false,
      };
    case MOVIES.SEARCH_QUERY:
      return {
        ...state,
        ...action.payload,
      };
    case MOVIES.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case MOVIES.FAILURE:
      return { isLoading: false };
    default:
      return state;
  }
};

export default movies;
