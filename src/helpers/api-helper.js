// для обработки запроса в сагах
export const deliverToReducer = (actionType, data, status) => {
  const type = actionType.toUpperCase();
  if (status === 200) {
    return { type: `${type}_SUCCESS`, data };
  }
  // if (status === 422) {
  //   return { type: `${type}_UNPROCESSABLE_ENTITY`, data };
  // }
  // if (status === 400) {
  //   return { type: `${type}_BAD_REQUEST`, data };
  // }
  return { type: 'FAILURE', data };
};