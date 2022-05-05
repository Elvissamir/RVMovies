import httpService from './httpService'

const rentalsEndpoint = `${process.env.REACT_APP_API_URL}/rentals`
const returnsEndpoint = `${process.env.REACT_APP_API_URL}/returns`

function getRentals () {
    return httpService.get(rentalsEndpoint)
}

function saveRental (rental) {
    return httpService.post(rentalsEndpoint, rental)
}

function closeRental (data) {
    return httpService.post(returnsEndpoint, data)
}

export {
    getRentals,
    saveRental,
    closeRental,
    rentalsEndpoint,
    returnsEndpoint
}