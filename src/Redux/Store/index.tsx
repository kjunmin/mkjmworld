import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../Reducers'
import ReduxThunk  from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(
        ReduxThunk 
    )
)

export default store;