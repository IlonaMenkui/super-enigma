import { MOVIES } from '../constants/actions';

const defaultState = {
  movies: [],
  page: 1,
  totalResults: 0,
  isLoading: false,
  isSearchChange: false,
  searchQuery: '',
};

const movies = (state = defaultState, action) => {
  switch (action.type) {
    case MOVIES.LOAD_SUCCESS:
      return {
        ...state,
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
        page: 1,
      };
    case MOVIES.RESET_PAGE:
      return {
        ...state,
        ...action.payload,
      };
    case MOVIES.INIT_SEARCH:
      return {
        ...state,
        ...action.payload,
      };
    case MOVIES.REQUEST:
      return {
        ...state,
        isLoading: true,
        movies: [],
      };
    case MOVIES.FAILURE:
      return { isLoading: false };
    default:
      return state;
  }
};

export default movies;
