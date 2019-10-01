import * as types from './types';

export const addProduct = obj => ({
    type: types.ADD_PRODUCT,
    payload: obj
});

export const removeProduct = id => ({
    type: types.REMOVE_PRODUCT,
    payload: id
});
