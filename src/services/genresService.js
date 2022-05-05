import httpService from './httpService'

const genresEndpoint = `${process.env.REACT_APP_API_URL}/genres`

function getGenres () {
    return httpService.get(genresEndpoint)
}

export {
    getGenres, 
}