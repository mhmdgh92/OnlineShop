import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import {reducer} from '../reducers/rootReducer';
export const configureStore = () => {
    return createStore(reducer, applyMiddleware(ReduxThunk));
}