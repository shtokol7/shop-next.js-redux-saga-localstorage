import { actionTypes } from '../types'

const initialState = {
  count: 0,
  error: false,
  loading: false,
}

function mainReducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.FAILURE:
      return {
        ...state,
        error: action.error
      }

    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }

    case actionTypes.RESET:
      return {
        ...state,
        count: state.count = 0
      }

    case actionTypes.SPINNER_SHOW:
      return {
        ...state,
        loading: true
      }

    case actionTypes.SPINNER_HIDE:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}

export default mainReducer
