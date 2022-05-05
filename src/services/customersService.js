import httpService from "./httpService";

const customersEndpoint = `${process.env.REACT_APP_API_URL}/customers`

function getCustomers () {
    return httpService.get(customersEndpoint)
}

function saveCustomer (customer) {
    return httpService.post(customersEndpoint, customer)
}

export {
    getCustomers,
    saveCustomer,
    customersEndpoint
}
