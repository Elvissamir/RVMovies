import httpService from './httpService'

const apiEndpoint = 'http://localhost:3000/api/genres'

async function getGenres () {
    const genres = await httpService.get(apiEndpoint)
    return genres
}

export {
    getGenres, 
}