import { put, takeEvery, all } from 'redux-saga/effects';

export function* helloSaga() {
  yield put({ type: 'LOAD_MOVIES_REQUEST' });
}

export function* watchSaga() {
  yield takeEvery('LOAD_MOVIES', helloSaga);
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchSaga(),
  ]);
}
