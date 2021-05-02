import { actionTypes } from './types';
import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import { getProductsSaga, getOneProductSaga } from './sagas/getProductsSaga';
import { getPostSaga } from './sagas/getPostSaga';


export function failure(error, textError) {
  return {
    type: actionTypes.FAILURE,
    error,
    log: console.log(textError),
  }
}

// это функция Watcher (наблюдатель)
function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_PRODUCTS, getProductsSaga),
    takeEvery(actionTypes.GET_ONE_PRODUCT, getOneProductSaga),
    takeLatest(actionTypes.GET_POST, getPostSaga),
  ])
}

export default rootSaga
