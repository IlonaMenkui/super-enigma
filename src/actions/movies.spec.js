/* eslint-disable no-undef */
import * as actions from './movies';
import * as types from '../constants';

describe('actions', () => {
  it('Should create an action informing the reducers that the movies load request began', () => {
    const expectedAction = {
      type: types.MOVIES.LOAD_MOVIES_REQUEST,
    };
    expect(actions.request()).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('Should create an action informing the reducers that the movies load request finished successfully', () => {
    const payload = {
      page: 1,
      totalPages: 1,
      searchQuery: '',
    };
    const expectedAction = {
      type: types.MOVIES.LOAD_MOVIES_SUCCESS,
      payload,
    };
    expect(actions.success(payload)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('Should create an action informing the reducers that the movies load request failed', () => {
    const expectedAction = {
      type: types.MOVIES.LOAD_MOVIES_FAILURE,
    };
    expect(actions.failure()).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('Should create an action informing the reducers that the search movies are reseted', () => {
    const expectedAction = {
      type: types.MOVIES.SEARCH_MOVIES_RESET,
    };
    expect(actions.reset()).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('Should create an action informing the reducers that the page is seted', () => {
    const payload = {
      page: 1,
    };
    const expectedAction = {
      type: types.MOVIES.SET_PAGE,
      payload,
    };
    expect(actions.setPage(payload)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('Should create an action informing the reducers that the search props are inited', () => {
    const payload = {
      searchQuery: '',
      page: 1,
    };
    const expectedAction = {
      type: types.MOVIES.INIT_SEARCH_PROPS,
      payload,
    };
    expect(actions.initSearch(payload)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('Should create an action informing the reducers that the genres are cached', () => {
    const payload = {
      cachedGenres: [{
        id: 1,
        name: 'Action',
      }],
    };
    const expectedAction = {
      type: types.MOVIES.CACHE_GENRES,
      payload,
    };
    expect(actions.cacheGenres(payload)).toEqual(expectedAction);
  });
});
