import { put, takeEvery, all } from 'redux-saga/effects';
import getMovies from '../api/api';

export function* loadMovies(props) {
  const { cachedGenres, page, url, searchQuery } = props.payload;

  yield put({ type: 'LOAD_MOVIES_REQUEST' });

  try {
    const moviesList = yield getMovies({ page, url, searchQuery, cachedGenres });
    const { movies, totalPages, genres } = moviesList;

    if (cachedGenres.length === 0) {
      yield put({ type: 'CACHE_GENRES', genres });
    }

    yield put({
      type: 'LOAD_MOVIES_SUCCESS',
      payload: {
        movies,
        totalPages,
        isLoading: false,
      },
    });
  } catch (e) {
    yield put('LOAD_MOVIES_FAILURE');
  }
}

export function* watchSaga() {
  yield takeEvery('LOAD_MOVIES', loadMovies);
}

export default function* rootSaga() {
  yield all([
    watchSaga(),
  ]);
}
