import { MOVIES } from '../constants/actions';

const defaultState = {
  movies: [],
  page: 1,
  totalResults: 0,
  showCircular: false,
  isSearch: false,
  searchQuery: '',
};

export const moviePage = (state = defaultState, action) => {
  switch (action.type) {
    case MOVIES.LOAD_SUCCESS:
      return {
        ...defaultState,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default moviePage;
