const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';
const SERVICE_API_PORT = 5000;
const BASE_ADDRESS = 'http://'+HOST+':'+PORT;
const SERVICE_API = 'http://'+HOST+':'+SERVICE_API_PORT;
module.exports = {
    "PORT": PORT,
    "HOST": HOST,
    "BASE_ADDRESS": BASE_ADDRESS,
    "HEADERS": [{
        name: 'content-type',
        value: 'application/json'
    }],
    "SERVICE_API_PORT": SERVICE_API_PORT,
    "SERVICE_API": SERVICE_API
};