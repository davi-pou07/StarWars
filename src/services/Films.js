import apiRequest from './api';

export async function getFilms() {
    try {
        return await apiRequest({endpoint: 'films/'})
    } catch (error) {
        console.log('erro: ', error);
    }
}