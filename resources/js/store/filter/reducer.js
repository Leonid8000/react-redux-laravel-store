import * as types from './types';

const initialState = {
    filterBy:'all',
    searchQuery:''
};

export default (state = initialState, action) => {
    switch  (action.type){

        case types.SET_FILTER:
            return {
                ...state,
                filterBy: action.payload
            };

        case types.SET_SEARCH:
            return {
                ...state,
                searchQuery: action.payload
            };

        default:
            return state;
    }
}
