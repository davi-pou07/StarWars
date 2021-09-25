import apiRequest from './api';

export async function getPeoples(film=0) {
    try {
        return await apiRequest({endpoint: 'films/' + film.toString() + 'peoples/'})
    } catch (error) {
        console.log('erro: ', error);
    }
}