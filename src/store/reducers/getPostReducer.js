import { actionTypes } from '../types'

const initialState = {
  post: [], // сюда записывается то, тчо приходит с апи
}

function getPostReducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.GET_POST_SUCCESS:
      return {
        ...state,
        post: action.data
      }

    default:
      return state
  }
}

export default getPostReducer
