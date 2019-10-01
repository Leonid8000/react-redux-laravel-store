import * as types from './types';

export const setFilter = filter => ({
    type: types.SET_FILTER,
    payload: filter
});
