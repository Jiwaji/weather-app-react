import WeatherCard from '../weather_card/WeatherCard';

export default function WeatherCards({ weatherList }) {
    return (
        <div className="cards">
            {weatherList?.map((weather, index) => (
                <WeatherCard weather={weather} key={index} />
            ))}
        </div>
    )
}