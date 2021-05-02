import { actionTypes } from '../types';
import { deliverToReducer } from '../../helpers/api-helper'
import { spinnerShow, spinnerHide } from '../actions/actions';
import { failure } from '../rootSaga.js'
import { call, delay, put } from 'redux-saga/effects';


// этот экшен заускает сагу Worker
export function getPost() {
  return { 
    type: actionTypes.GET_POST,
  }
}

  // это функция Worker (рабочий) она прописывается в Watcher где отслеживается
export function* getPostSaga(action) {
  try {
    yield put(spinnerShow()) // запускаем спиннер
    yield delay(1000)
    const res = yield call(() => fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?_limit=3`))
    const data = yield res.json()

    // диспатчит в стор 
    yield put( 
      deliverToReducer( // вспомогательная функция, подставляет постфикс к базовому тайпу
        action.type,    // сюда прилетает type: GET_POST и уже от статуса запроса дописывает постфикс к тайпу
        data,           // записываем в стор полученные данные
        res.status      // опеределяет статус запроса
      )) 
    yield put(spinnerHide()) // останавливаем спиннер
  } catch (err) {
    yield put(failure(err, 'Ошибка в getPostSaga')) // отвечает за вывод ошибки
    yield put(spinnerHide()) // останавливаем спиннер
  }
}