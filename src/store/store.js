import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

// редьюсеры
import mainReducer from '../store/reducers/reducer';
import getPostReducer from '../store/reducers/getPostReducer';
import getProductsReducer from '../store/reducers/getProductReducer';
import cartReducer from '../store/reducers/cartReducer';

// сага вотчер
import rootSaga from '../store/rootSaga';


// записываем данные в localStorage
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    if (typeof document !== 'undefined') {
      localStorage.setItem('NEXT_JS_locaStorage', JSON.stringify(
        getState()
      ));
    }
    return result;
  };
};

// извлекаем данные из localStorage
const reHydrateStore = () => { 
  if (typeof document !== 'undefined') {
    if (localStorage.getItem('NEXT_JS_locaStorage') !== null) {
      return JSON.parse(localStorage.getItem('NEXT_JS_locaStorage')) // re-hydrate the store
    }
  }
}





const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware, localStorageMiddleware))
  }
  return applyMiddleware(...middleware)
}

const reducer = (state = {}, action) => {
  // Переносит стор со стороны ssr на сторону spa
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

    // позволяет сохранять состояние редакса на стороне клиента
    // (если переходим на другие страницы где есть ssr, то в редаксе сохраняется значение )
    if (state.cartReducer) nextState.cartReducer = state.cartReducer

    return nextState;
  }
  return combineReducers({
    mainReducer,
    getPostReducer,
    getProductsReducer,
    cartReducer,
  })(state, action);
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducer, reHydrateStore(), bindMiddleware([sagaMiddleware]))

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(makeStore)
