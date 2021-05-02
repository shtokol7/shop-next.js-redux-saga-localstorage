import { actionTypes } from '../types'

const initialState = {
  products: [], // сюда записывается продукты с апи
  product: {}
}

function getProductsReducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
      }
    
      // когда запрос успешный
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data
      }

      

    case actionTypes.GET_ONE_PRODUCT:
      return {
        ...state,
      }
    
      // когда запрос успешный
    case actionTypes.GET_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.data
      }

    default:
      return state
  }
}

export default getProductsReducer
