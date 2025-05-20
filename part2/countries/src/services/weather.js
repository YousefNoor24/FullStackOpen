import axios from "axios"

const api_key = import.meta.env.VITE_OPENWEATHER_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const getWeather = (latitude, longitude) => {
    const request = axios.get(`${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${api_key}`)
    return request.then(request => request.data)
}

export default {getWeather}