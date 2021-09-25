import {
    LIST_FILMS
} from "./types";
import {getFilms} from "../../services/Films";

export function list_films() {
    return (dispatch) => {
        return getFilms().then((result) => {
            dispatch({type: LIST_FILMS, newValue: result});
        });
    };
}