import { useEffect, useState } from 'react'

import './WeatherCard.css'

export default function WeatherCard({ weather }) {
    const [iconSrc, setIconSrc] = useState("")
    function getShortDay() {
        const shortDays = {
            0: "Sun",
            1: "Mon",
            2: "Tue",
            3: "Wed",
            4: "Thu",
            5: "Fri",
            6: "Sat"
        }
        const day = new Date(weather?.dt * 1000)?.getDay()
        return shortDays[day]
    }

    useEffect(() => {
        if(weather?.weather[0]?.icon) {
            setIconSrc(`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`)
        }
    }, [weather])
    return (
        <div className="card">
            <p>{getShortDay()}</p>
            <div><img src={iconSrc} alt="weather" width="30px" /></div>
            <p>{weather?.main?.temp_max}&#176; <span className='low-temp'>{weather?.main?.temp_min}&#176;</span></p>
        </div>
    )
}