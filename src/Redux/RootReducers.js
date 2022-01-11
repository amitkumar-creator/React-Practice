import { combineReducers } from 'redux';
import Reducers from './Reducers/Reducers';
import SubmitFormReducer from './Reducers/SubmitFormReducer';
import ProductReducers from './Reducers/ProductItemReducer'

export const rootReducers = combineReducers({
    Reducers: Reducers,
    SubmitFormReducer:SubmitFormReducer,
    ProductReducers: ProductReducers
});