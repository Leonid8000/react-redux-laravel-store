import * as types from './types';

export const getProducts = (loading = true) => {
  return {
    type: types.GET_PRODUCTS,
    request: {
      method: 'GET',
      url: '/products'
    },
    meta: {
      thunk: true,
      loading
    }
  };
};

// export const setProducts = products => ({
//   type: types.SET_PRODUCTS,
//   payload: products
// });
