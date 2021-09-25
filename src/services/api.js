import axios from "axios";

const apiRequest = async(method='GET', params=[], endpoint='/', headers={}) => {
    const BASE_API_URL = 'https://swapi.dev/api/';
    let URL = BASE_API_URL + endpoint;

    return axios({
        method: method,
        url: URL,
        data: params,
        headers: headers}).then((response) => {

        return response.data;

    }).catch( (error) => {
        alert("Ocorreu um erro ao tentar carregar os dados, por favor, atualize e tente novamente. Verifique se você" +
            " possui conexão com a internet");
    });
}

export default apiRequest;