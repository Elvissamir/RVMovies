import httpService from "./httpService"
import config from '../config.json'

const moviesEndpoint = `${config.apiUrl}/movies`

function getMovies () {
    return httpService.get(moviesEndpoint)
}

function deleteMovieById (id) {
    return httpService.delete(`${moviesEndpoint}/${id}`)
}

export {
    getMovies,
    deleteMovieById,
}