import { combineReducers } from 'redux'
import films_reducer from './films_reducer';
import peoples_reducer from "./peoples_reducer";

export const Reducers = combineReducers({
    films: films_reducer,
    peoples: peoples_reducer
});
