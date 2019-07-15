import { MOVIES } from '../constants/actions';

export const search = (state = {}, action) => {
  switch (action.type) {
    case MOVIES.SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default search;
