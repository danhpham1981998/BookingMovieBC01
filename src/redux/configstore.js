import {applyMiddleware, combineReducers,createStore} from 'redux';
import { PhimReducer } from './reducers/PhimReducer';
import reduxThunk from 'redux-thunk';
import {LoadingReducer} from './reducers/LoadingReducer'
import { QuanLyDatVeReducer } from './reducers/QuanLyDatVeReducer';


//state tổng của ứng dụng
const rootReducer = combineReducers ({
    PhimReducer,
    LoadingReducer,
    QuanLyDatVeReducer
})


export const store = createStore(rootReducer,applyMiddleware(reduxThunk))

