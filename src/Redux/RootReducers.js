import { combineReducers } from 'redux';
import Reducers from './Reducers/Reducers';
import SubmitFormReducer from './Reducers/SubmitFormReducer'

export const rootReducers = combineReducers({
    Reducers: Reducers,
    SubmitFormReducer:SubmitFormReducer
});