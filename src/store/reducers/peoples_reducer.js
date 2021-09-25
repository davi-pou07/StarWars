import {
    LIST_PEOPLES
} from '../actions/types';


const initialState = {
    list: [],
    isLoading:false,
    error:'',
    done:false,
};

const peoples_reducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_PEOPLES:
            return {...state, list: action.newValue};
        default:
            return state
    }
};

export default peoples_reducer;