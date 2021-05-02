import { actionTypes } from '../types'

const initialState = {
  products: null,
}

function loadDataReducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        products: action.data
      }

    default:
      return state
  }
}

export default loadDataReducer;
