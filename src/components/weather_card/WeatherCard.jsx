import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import './WeatherCard.css'

export default function WeatherCard({ weather }) {
    const [iconSrc, setIconSrc] = useState("")
    const showWeeklyWeather = useSelector((state) => state.showWeeklyWeather)

    function getHeader() {
        const shortDays = {
            0: "Sun",
            1: "Mon",
            2: "Tue",
            3: "Wed",
            4: "Thu",
            5: "Fri",
            6: "Sat"
        }
        const date = new Date(weather?.dt * 1000)
        const day = date?.getDay()

        const hour = date.getHours()
        const mins = date.getMinutes()

        if(showWeeklyWeather) {
            return shortDays[day]
        }
        return `${hour}:${mins < 10 ? '0' + mins: mins}`
    }

    useEffect(() => {
        if(weather?.weather[0]?.icon) {
            setIconSrc(`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`)
        }
    }, [weather])
    return (
        <div className="card">
            <p>{getHeader()}</p>
            <div><img src={iconSrc} alt="weather" width="30px" /></div>
            <p>{weather?.main?.temp_max}&#176; <span className='low-temp'>{weather?.main?.temp_min}&#176;</span></p>
        </div>
    )
}