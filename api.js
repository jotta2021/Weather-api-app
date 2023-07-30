import axios from "axios";
//http://api.weatherapi.com/v1/current.json
const api = axios.create({
    baseURL: `http://api.weatherapi.com/v1`
})
export default api