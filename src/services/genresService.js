import httpService from './httpService'

const genresEndpoint = 'http://localhost:3000/api/genres'

async function getGenres () {
    const { data: genres } = await httpService.get(genresEndpoint)
    return genres
}

export {
    getGenres, 
}