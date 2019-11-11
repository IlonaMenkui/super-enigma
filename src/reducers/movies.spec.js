/* eslint-disable no-undef */
import reducer from './movies';
import * as types from '../constants';

describe('movies reducer', () => {
  it('Should return the default state', () => {
    expect(reducer(undefined, {})).toEqual({
      movies: [],
      cachedGenres: [],
      page: 1,
      totalPages: 0,
      isLoading: false,
      searchQuery: '',
    });
  });

  it('Should handle LOAD_MOVIES_REQUEST', () => {
    expect(
      reducer({}, {
        type: types.MOVIES.LOAD_MOVIES_REQUEST,
      }),
    ).toEqual(
      {
        isLoading: true,
        movies: [],
      },
    );
  });
  it('Should handle LOAD_MOVIES_SUCCESS', () => {
    expect(
      reducer({}, {
        type: types.MOVIES.LOAD_MOVIES_SUCCESS,
        payload: {
          page: 1,
          totalPages: 1,
          searchQuery: '',
        },
      }),
    ).toEqual(
      {
        page: 1,
        totalPages: 1,
        searchQuery: '',
      },
    );
  });
  it('Should handle LOAD_MOVIES_FAILURE', () => {
    expect(
      reducer({}, {
        type: types.MOVIES.LOAD_MOVIES_FAILURE,
      }),
    ).toEqual(
      {
        isLoading: false,
      },
    );
  });
  it('Should handle SEARCH_MOVIES_RESET', () => {
    expect(
      reducer({}, {
        type: types.MOVIES.SEARCH_MOVIES_RESET,
      }),
    ).toEqual(
      {
        searchQuery: '',
        isLoading: false,
        page: 1,
      },
    );
  });
  it('Should handle SET_PAGE', () => {
    expect(
      reducer({}, {
        type: types.MOVIES.SET_PAGE,
        payload: {
          page: 1,
        },
      }),
    ).toEqual(
      {
        page: 1,
      },
    );
  });
  it('Should handle INIT_SEARCH_PROPS', () => {
    expect(
      reducer({}, {
        type: types.MOVIES.INIT_SEARCH_PROPS,
        payload: {
          searchQuery: '',
          page: 1,
        },
      }),
    ).toEqual(
      {
        searchQuery: '',
        page: 1,
      },
    );
  });
  it('Should handle CACHE_GENRES', () => {
    expect(
      reducer({}, {
        type: types.MOVIES.CACHE_GENRES,
        payload: {
          cachedGenres: [{
            id: 1,
            name: 'Action',
          }],
        },
      }),
    ).toEqual({
      cachedGenres: [{
        id: 1,
        name: 'Action',
      }],
    });
  });
});
