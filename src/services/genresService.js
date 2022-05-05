import httpService from './httpService'
import config from '../config.json'

const genresEndpoint = `${process.env.REACT_APP_API_URL}/genres`

function getGenres () {
    return httpService.get(genresEndpoint)
}

export {
    getGenres, 
}