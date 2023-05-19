import { createStore, combineReducers,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducer from '../reducers/rootReducer';
const configureStore = () => {
    return createStore(reducer,applyMiddleware(ReduxThunk));
}
export default configureStore;
