import { MOVIES } from '../constants/constants';

export const request = () => ({
  type: MOVIES.LOAD_MOVIES_REQUEST,
});

export const succsess = payload => ({
  type: MOVIES.LOAD_MOVIES_SUCCESS,
  payload,
});

export const failure = () => ({
  type: MOVIES.LOAD_MOVIES_FAILURE,
});

export const reset = () => ({
  type: MOVIES.SEARCH_MOVIES_RESET,
});

export const setPage = payload => ({
  type: MOVIES.SET_PAGE,
  payload,
});

export const initSearch = payload => ({
  type: MOVIES.INIT_SEARCH_PROPS,
  payload,
});

export const cacheGenres = payload => ({
  type: MOVIES.CACHE_GENRES,
  payload,
});
