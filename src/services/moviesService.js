import httpService from "./httpService"
import config from '../config.json'

const moviesEndpoint = `${config.apiUrl}/movies`

function getMovies () {
    return httpService.get(moviesEndpoint)
}

function getMovieById (id) {
    return httpService.get(`${moviesEndpoint}/${id}`)
}

function saveMovie (movie) {
    if (movie._id) {
        const data = { ...movie }
        delete data._id
        console.log(data)
        //return httpService.put(`${moviesEndpoint}/${movie._id}`, data)
    }

    return httpService.post(`${moviesEndpoint}`, movie)
}

function deleteMovieById (id) {
    return httpService.delete(`${moviesEndpoint}/${id}`)
}

export {
    getMovies,
    getMovieById,
    saveMovie,
    deleteMovieById,
}