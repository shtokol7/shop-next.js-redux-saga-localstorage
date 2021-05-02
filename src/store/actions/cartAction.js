import { actionTypes } from '../types';

export function addToCart(data) {
  return {
    type: actionTypes.ADD_TO_CART,
    data
  }
};

export function incrementProduct(id) {
  return {
    type: actionTypes.INCREMENT_PRODUCT,
    id
  }
};

export function decrementProduct(id) {
  return {
    type: actionTypes.DECREMENT_PRODUCT,
    id
  }
};

export function removeProduct(id) {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    id
  }
};

export function clearCart() {
  return {
    type: actionTypes.CLEAR_CART,
  }
};
