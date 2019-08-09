import { MOVIES } from '../constants';

const defaultState = {
  movies: [],
  cachedGenres: [],
  page: 1,
  totalResults: 0,
  isLoading: false,
  isSearchChange: false,
  searchQuery: '',
};

const movies = (state = defaultState, action) => {
  switch (action.type) {
    case MOVIES.LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case MOVIES.SEARCH_MOVIES_RESET:
      return {
        ...state,
        searchQuery: '',
        isLoading: false,
        page: 1,
      };
    case MOVIES.SET_PAGE:
      return {
        ...state,
        ...action.payload,
      };
    case MOVIES.INIT_SEARCH_PROPS:
      return {
        ...state,
        ...action.payload,
      };
    case MOVIES.LOAD_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        movies: [],
      };
    case MOVIES.LOAD_MOVIES_FAILURE:
      return { isLoading: false };
    case MOVIES.CACHE_GENRES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default movies;
