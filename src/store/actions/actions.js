import { actionTypes } from '../types'

// export function failure(error, textError) {
//   return {
//     type: actionTypes.FAILURE,
//     error,
//     log: console.log(textError),
//   }
// }

export function increment() {
  return { type: actionTypes.INCREMENT }
}

export function decrement() {
  return { type: actionTypes.DECREMENT }
}

export function reset() {
  return { type: actionTypes.RESET }
}


export function spinnerShow() {
  return { type: actionTypes.SPINNER_SHOW }
}

export function spinnerHide() {
  return { type: actionTypes.SPINNER_HIDE }
}


