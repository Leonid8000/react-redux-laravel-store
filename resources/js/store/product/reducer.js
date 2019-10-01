import { success, error } from 'redux-saga-requests';
import * as types from './types';

const initialState = {
  items: [],
  isReady:false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return { ...state, isReady: false, error: null };

    case success(types.GET_PRODUCTS):
      return { ...state, items: action.data, isReady: true };

    case error(types.GET_PRODUCTS):
      return { ...state, error: action.error };

    default: return state;
  }
};

export default reducer;


// const initialState = {
//   loading: false,
//   items: null,
//   isReady:false
// };
//
// export const reducer = (state = initialState, action) => {
//   switch  (action.type){
//     case types.SET_PRODUCTS:
//       return {
//         ...state,
//         items: action.payload,
//         isReady:true
//       };
//
//     case types.SET_IS_READY:
//       return{
//         ...state,
//         isReady: action.payload
//       };
//
//     default: return state;
//   }
// };
//
// export default reducer;