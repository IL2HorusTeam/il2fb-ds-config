import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import logger from 'redux-logger'


const configureStoreDev = initialState => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunkMiddleware, logger))
    );
};

export default configureStoreDev