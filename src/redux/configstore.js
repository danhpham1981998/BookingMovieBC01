import {applyMiddleware, combineReducers,createStore} from 'redux';
import { PhimReducer } from './reducers/PhimReducer';
import reduxThunk from 'redux-thunk';
import {LoadingReducer} from './reducers/LoadingReducer'


//state tổng của ứng dụng
const rootReducer = combineReducers ({
    PhimReducer,
    LoadingReducer
})


export const store = createStore(rootReducer,applyMiddleware(reduxThunk))

