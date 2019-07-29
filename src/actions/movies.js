import { MOVIES } from '../constants/actions';

export const request = () => ({
  type: MOVIES.REQUEST,
});

export const succsess = payload => ({
  type: MOVIES.LOAD_SUCCESS,
  payload,
});

export const failure = () => ({
  type: MOVIES.FAILURE,
});

export const reset = () => ({
  type: MOVIES.SEARCH_RESET,
});

export const searching = payload => ({
  type: MOVIES.SEARCH,
  payload,
});

export const setSearchQuery = payload => ({
  type: MOVIES.SEARCH_QUERY,
  payload,
});
