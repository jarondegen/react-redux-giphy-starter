// TODO: Import `createStore` from `redux`
import { applyMiddleware, createStore } from 'redux'
// TODO: Import middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// TODO: Import `rootReducer`
import rootReducer from './reducers/rootReducer';
// TODO: Define a `configureStore` function
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk, logger));
}

// TODO: Export the `configureStore` function
export default configureStore;