import { useState, useEffect } from "react"
import weatherService from "../services/weather"

const Weather = ({name, latitude, longitude}) => {
    const [weather, setWeather] = useState(null)
    console.log(name, latitude, longitude)
    useEffect(() => {
        weatherService
            .getWeather(latitude, longitude)
            .then(weather => {
                setWeather(weather)
            })
    }, [])

    if (weather === null) return null
    console.log(weather.list[0].weather[0].icon)
    return (
        <div>
            <h2>Weather in {name}</h2>
            <p>Temperature {weather.list[0].main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}.png`} alt={weather.list[0].weather[0].description}/>
            <p>Wind {weather.list[0].wind.speed} m/s</p>
        </div>
    )
}

export default Weather