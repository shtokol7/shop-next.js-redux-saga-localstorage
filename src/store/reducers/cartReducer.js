import { actionTypes } from '../types'

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantities: 0
}

function cartReducer(state = initialState, action) {
  let findPro;
  let index;

  switch (action.type) {

      // добавляем товар в корзину из карточки товара
    case actionTypes.ADD_TO_CART:
      const check = state.cart.find((item) => item.id === action.data.id)
      console.log('check', check);
      console.log('action.data.id', action.data.id);


      if (!!check) {
        return state;
      } else {
        const Tprice = state.totalPrice + action.data.price * action.data.quantity
        const Tquantities = state.totalQuantities + action.data.quantity;

        return {
          ...state,
          cart: [...state.cart, action.data],
          totalPrice: Tprice,
          totalQuantities: Tquantities,
        }
      }

    case actionTypes.INCREMENT_PRODUCT:
      // в корзине ищем такой товар
      findPro = state.cart.find(product => product.id === action.id);
      // ищем индекс элемента в массиве всех добавленных товаров
      index = state.cart.findIndex(product => product.id === action.id);
      // найденному товару добавляем единицу товара
      findPro.quantity += 1;
      // записываем найденный товар тому индексу массива которому он пренадлежит 
      // (таким образом скрипт распознает у какого товара изменяется количество)
      state.cart[index] = findPro;
      return {
        ...state,
        totalPrice: state.totalPrice + findPro.price,   // общая сумма, плюс сумма найденного товара
        totalQuantities: state.totalQuantities + 1, // добавляем один товар к общему количеству всех товаров
      }

    case actionTypes.DECREMENT_PRODUCT:
      findPro = state.cart.find(product => product.id === action.id);
      index = state.cart.findIndex(product => product.id === action.id);
      if (findPro.quantity > 1) {
        findPro.quantity -= 1;
        state.cart[index] = findPro;
        return {
          ...state,
          totalPrice: state.totalPrice - findPro.price,
          totalQuantities: state.totalQuantities - 1,
        }
      } else {
        return state;
      }

    case actionTypes.REMOVE_PRODUCT:
      
      findPro = state.cart.find(product => product.id === action.id);
      const filtered = state.cart.filter(product => product.id !== action.id);
      console.log(filtered);
      return {
        ...state,
        cart: filtered,
        totalPrice: state.totalPrice - findPro.price * findPro.quantity,
        totalQuantities: state.totalQuantities - findPro.quantity,
      }

      // очищаем корзину от товаров
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
        totalPrice: 0,
        totalQuantities: 0,
      }


    default:
      return state
  }
}

export default cartReducer
