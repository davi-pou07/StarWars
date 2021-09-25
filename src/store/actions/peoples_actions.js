import {
    LIST_PEOPLES
} from "./types";
import {getPeoples} from "../../services/Peoples";

export function list_peoples(film=0) {
    return (dispatch) => {
        return getPeoples(film).then((result) => {
            dispatch({type: LIST_PEOPLES, newValue: result});
        });
    };
}