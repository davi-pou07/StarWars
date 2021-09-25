import apiRequest from './api';

export async function getFilms() {
    try {
        let data = await apiRequest({endpoint: 'films'})
        return data;
    } catch (error) {
        console.log('erro: ', error);
    }
}