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

export const setPage = payload => ({
  type: MOVIES.SET_PAGE,
  payload,
});

export const initSearch = payload => ({
  type: MOVIES.INIT_SEARCH,
  payload,
});
