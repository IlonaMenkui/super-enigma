import { MOVIES } from '../constants/actions';

const defaultState = {
  movies: [],
  page: 1,
  totalResults: 0,
  showCircular: false,
  isSearch: false,
  isSearchChange: false,
  searchQuery: '',
};

const movies = (state = defaultState, action) => {
  switch (action.type) {
    case MOVIES.LOAD_SUCCESS:
      return {
        ...defaultState,
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
        isSearch: false,
        searchQuery: '',
        showCircular: false,
      };
    case MOVIES.SEARCH_QUERY:
      return {
        ...state,
        ...action.payload,
      };
    case MOVIES.REQUEST:
      return {
        ...state,
        showCircular: true,
      };
    case MOVIES.FAILURE:
      return { showCircular: false };
    default:
      return state;
  }
};

export default movies;
