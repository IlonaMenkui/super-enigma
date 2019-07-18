import { MOVIES } from '../constants/actions';

const defaultState = {
  isSearch: false,
  searchQuery: '',
};

export const search = (state = defaultState, action) => {
  switch (action.type) {
    case MOVIES.SEARCH:
      return {
        ...action.payload,
      };
    case MOVIES.SEARCH_RESET:
      return defaultState;
    case MOVIES.SEARCH_QUERY:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default search;
