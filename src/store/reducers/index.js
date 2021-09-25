import { combineReducers } from 'redux'
import films_reducer from './films_reducer';

export const Reducers = combineReducers({
    films: films_reducer
});
