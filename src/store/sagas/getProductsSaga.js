import { actionTypes } from '../types';
import { deliverToReducer } from '../../helpers/api-helper'
import { spinnerShow, spinnerHide } from '../actions/actions';
import { failure } from '../rootSaga.js'
import { call, put } from 'redux-saga/effects';


// этот экшен заускает сагу Worker
// инициализация получения всех товаров
export function getProducts() {
  return { 
    type: actionTypes.GET_PRODUCTS,
  }
}

  // это функция Worker (рабочий) она прописывается в Watcher где отслеживается
  // получение всех товаров
export function* getProductsSaga(action) {
  try {
    const res = yield call(() => fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`))
    const data = yield res.json()

    // диспатчит в стор 
    yield put( 
      deliverToReducer( // вспомогательная функция, подставляет постфикс к базовому тайпу
        action.type,    // сюда прилетает type: GET_PRODUCTS и уже от статуса запроса дописывает постфикс к тайпу
        data,           // записываем в стор полученные данные
        res.status      // опеределяет статус запроса
      )) 
  } catch (err) {
    yield put(failure(err, 'Ошибка в getProductsSaga')) // отвечает за вывод ошибки
  }
}





// этот экшен заускает сагу Worker
// инициализация получения одного товара
export function getOneProduct(id) {
  return {
    type: actionTypes.GET_ONE_PRODUCT,
    id
  }
}

// это функция Worker (рабочий) она прописывается в Watcher где отслеживается
// Workerполучение одного товара
export function* getOneProductSaga(action) {
  try {
    const res = yield call(() => fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${action.id}`))
    const data = yield res.json()

    // диспатчит в стор 
    yield put(
      deliverToReducer( // вспомогательная функция, подставляет постфикс к базовому тайпу
        action.type,    // сюда прилетает type: GET_ONE_PRODUCT и уже от статуса запроса дописывает постфикс к тайпу
        data,           // записываем в стор полученные данные --- ТУТ ПОЛУЧАЕМ ОБЪЕКТ ТОВАРА СО ВСЕМ ПОЛЯМИ
        res.status      // опеределяет статус запроса
      ))
  } catch (err) {
    yield put(failure(err, 'Ошибка в getOneProductSaga')) // отвечает за вывод ошибки
  }
}