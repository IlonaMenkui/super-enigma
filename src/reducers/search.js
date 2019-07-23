import { MOVIES } from '../constants/actions';

const defaultState = {
  isSearch: false,
  searchQuery: '',
  showCircular: false,
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
    case MOVIES.REQUEST:
      return { showCircular: true };
    default:
      return state;
  }
};

export default search;
