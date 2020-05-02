import { combineReducers } from 'redux';
import sortingReducer from './sortingReducer';

const rootReducer = combineReducers({
    sortingReducer,
})

export default rootReducer;