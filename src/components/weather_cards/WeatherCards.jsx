import WeatherCard from '../weather_card/WeatherCard';

import weatherIcon from '../../assets/weather.svg';

export default function WeatherCards() {
    const weatherData = [
        {
            name: "Sun",
            icon: weatherIcon,
            temp: {
                high: 15,
                low: -3
            }
        },
        {
            name: "Mon",
            icon: weatherIcon,
            temp: {
                high: -15,
                low: -30
            }
        },
        {
            name: "Tue",
            icon: weatherIcon,
            temp: {
                high: 15,
                low: -3
            }
        },
        {
            name: "Wed",
            icon: weatherIcon,
            temp: {
                high: 15,
                low: -3
            }
        },
        {
            name: "Thu",
            icon: weatherIcon,
            temp: {
                high: 15,
                low: -3
            }
        },
        {
            name: "Fri",
            icon: weatherIcon,
            temp: {
                high: 15,
                low: -3
            }
        },
        {
            name: "Sat",
            icon: weatherIcon,
            temp: {
                high: 15,
                low: -3
            }
        },
    ]
    return (
        <div className="cards">
            {weatherData.map((weather, index) => (
                <WeatherCard weather={weather} key={index} />
            ))}
        </div>
    )
}