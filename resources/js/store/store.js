import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import { requestsPromiseMiddleware } from 'redux-saga-requests';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import saga from './saga';

//reducers
import cart from './cart/reducer';
import filter from './filter/reducer';
import products from './product/reducer';

//create logger and saga
const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

//combine all reducers
const rootReducer = combineReducers({cart, filter, products});

//arr : thunk, logger, saga
const middlewares = [
    thunkMiddleware,
    requestsPromiseMiddleware({ auto: true }),
    sagaMiddleware,
    loggerMiddleware
];

const initialState = {};

//reducers + state + middlewares(thunk,logger,saga)
    const store = createStore(rootReducer, initialState , composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(() => saga(store.dispatch, store.getState));

export default store;






