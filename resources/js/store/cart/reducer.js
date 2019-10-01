import * as types from './types';

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch  (action.type){
        case types.ADD_PRODUCT:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case types.REMOVE_PRODUCT:
            return{
                ...state,
                items: state.items.filter(o => o.id !== action.payload)
            };

        default:
            return state;
    }
}

