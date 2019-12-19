import axios from 'axios';
import { put, takeEvery, all } from 'redux-saga/effects';

const getMovies = ({ searchQuery, page, url }) => axios.get('http://127.0.0.1:8080/movies/',
  {
    params: {
      url,
      query: searchQuery,
      page,
    },
  })
  .then((({ data }) => {
    const movies = data;
    return { movies };
  }));

export function* loadMovies(props) {
  const { page, url, searchQuery, cachedGenres } = props.payload;
  yield put({ type: 'LOAD_MOVIES_REQUEST' });
  try {
    const { movies: { movies, totalPages, genres } } = yield getMovies({ searchQuery, page, url });
    if (cachedGenres.length === 0) {
      yield put({ type: 'CACHE_GENRES', payload: { cachedGenres: genres } });
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
