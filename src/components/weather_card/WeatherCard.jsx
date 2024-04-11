import './WeatherCard.css'

export default function WeatherCard({ weather }) {
    return (
        <div className="card">
            <p>{weather?.name}</p>
            <div><img src={weather?.icon} alt="weather" width="30px" /></div>
            <p>{weather?.temp?.high}&#176; <span className='low-temp'>{weather?.temp?.low}&#176;</span></p>
        </div>
    )
}