const axios = require('axios');

exports.getAllCustomers = function()
{
    return axios.get("https://jsonplaceholder.typicode.com/users")
}
