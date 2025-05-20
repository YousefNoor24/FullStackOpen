import axios from "axios"

const api_key = import.meta.env.VITE_SOME_KEY
const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast'


const getWeather = (latitude, longitude) => {
    const request = axios.get(`${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${api_key}`)
    console.log(request)
    return request.then(request => request.data)
}


export default {getWeather}