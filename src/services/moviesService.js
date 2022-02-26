import httpService from "./httpService"

const moviesEndpoint = 'http://localhost:3000/api/movies'

async function getMovies () {
    const { data: movies } = await httpService.get(moviesEndpoint)
    return movies
}

async function deleteMovieById (id) {
    const { data: movie } = await httpService.delete(`${moviesEndpoint}/${id}`)
    return movie
}

export {
    getMovies,
    deleteMovieById,
}