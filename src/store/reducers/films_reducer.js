import {
    LIST_FILMS
} from '../actions/types';


const initialState = {
    list: [],
    isLoading:false,
    error:'',
    done:false,
};

const films_reducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_FILMS:
            return {...state, list: action.newValue};
        default:
            return state
    }
};

export default films_reducer;