import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Reducers } from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';

const middleware = [thunk];

const store = createStore(Reducers, {}, composeWithDevTools(applyMiddleware(...middleware)));
export default store;

// export const Store = createStore(Reducers, {}, compose(applyMiddleware(thunk)));