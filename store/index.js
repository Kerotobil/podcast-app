import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({ auth: authReducer });

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
