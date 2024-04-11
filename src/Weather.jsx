import CurrentWeather from './components/current_weather/CurrentWeather';
import WeatherDetails from './components/weather_details/WeatherDetails';
import './Weather.css';

export default function Weather() {
  return (
    <div className="main">
      <CurrentWeather/>
      <WeatherDetails/>
    </div>
  );
}
