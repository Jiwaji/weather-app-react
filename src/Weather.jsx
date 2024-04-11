import { useState, useEffect, useCallback } from 'react';

// import weatherIcon from './assets/weather.svg';
import searchIcon from './assets/search.svg';
import detectIcon from './assets/detect.svg';
import userProfile from './assets/profile.jpg';

import WeatherCards from './components/weather_cards/WeatherCards';
import Hightlights from './components/highlights/Highlights';
// import AutoComplete from './components/autocomplete/AutoComplete';

import './Weather.css';

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("mumbai");
  const [latLong, setLatLong] = useState({ lat: 44.34, lon: 10.99 })
  const [locationImage, setLocationImage] = useState(null)
  const [unit, setUnit] = useState("metric")

  const OWM_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather`
  const LOCATION_URL = `https://api.openweathermap.org/geo/1.0/direct`
  const LOCATION_IMAGE_URL = `https://api.unsplash.com/search/photos`
  const today = new Date();
  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };

  const currentDay = days[today.getDay()];
  const currentHour = today.getHours();
  const currentMinutes =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
  const currentTime = ` ${currentHour}:${currentMinutes}`;

  async function getWeatherByCurrentLocation() {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      await getWeather(lat, lon)
    });
  }

  const getWeather = useCallback(async (lat, lon) => {
    try {
      const url = `${WEATHER_URL}?lat=${lat}&lon=${lon}&units=${unit}&appid=${OWM_API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data)
    } catch (error) {
      console.log(error)
    }
  }, [WEATHER_URL, OWM_API_KEY, unit])

  const getWeatherBySearchLocation = useCallback(async () => {
    const { lat, lon } = latLong;
    await getWeather(lat, lon)
  }, [getWeather, latLong])

  const getLatLong = useCallback(async () => {
    try {
      const url = `${LOCATION_URL}?q=${location}&limit=10&appid=${OWM_API_KEY}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data.length > 0) {
          const { lat, lon } = data[0]
          setLatLong({ lat, lon })
        }
      }
    } catch (error) {
      console.log(error)
    }
  } , [LOCATION_URL, OWM_API_KEY, location])

  const getLocationImage = useCallback(async () => {
    try {
      const url = `${LOCATION_IMAGE_URL}?query=${location}&page=1&client_id=${UNSPLASH_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      if(data.results.length) {
        setLocationImage(data.results[0].urls.full)
      }
    } catch(error) {
      console.log(error)
    }
  } , [LOCATION_IMAGE_URL, UNSPLASH_KEY, location])

  useEffect(() => {
    if (location) {
      getLatLong()
      getLocationImage()
    }
  }, [location, getLatLong, getLocationImage]);

  useEffect(() => {
    getWeatherBySearchLocation()
  }, [latLong, unit, getWeatherBySearchLocation])

  return (
    <div className="main">
      <div className="left">
        <div className="left-inner">
          <div className="searchbar">
            <div className="search-icon">
              <img src={searchIcon} alt="search icon" />
            </div>
            <input type="text" placeholder="Search for places..." onChange={(e) => setLocation(e.target.value)} />
            {/* <AutoComplete/> */}
            <div className="detect-location-icon">
              <button className='detect-location' onClick={() => getWeatherByCurrentLocation()}><img src={detectIcon} alt="detect icon" /></button>
            </div>
          </div>
          <div className="current-temp">
            <div className="temp-img">
              <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@4x.png`} alt="weather" />
            </div>
            <p className="temp">{weather?.main?.temp} { unit === "metric" ? <span>&#8451;</span> : <span>&#8457;</span>}</p>
            <p className="day">
              {currentDay},<span className="current-time">{currentTime}</span>
            </p>
            <hr />
            <div className="current-weather">
              <div className="weather clouds">
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`} alt="clouds" width="20" height="20" />
                <p>{weather?.weather[0]?.main}</p>
              </div>
              <div className="weather rain">
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`} alt="rain" width="20" height="20" />
                <p>Rain {weather?.rain ? weather?.rain["1h"] : "0%"} </p>
              </div>
            </div>
            <div className="city-img">
              <p>{location?.toUpperCase()}</p>
              <img
                src={locationImage}
                alt="city-banner"
                width="200"
                height="100"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        {/* <WeeklyWeahter /> */}
        <div className="right-top">
          <div className="header">
            <div className="tab">
              <button>Today</button>
              <button className='active'>Week</button>
            </div>
            <div className="unit">
              <button className={unit === "metric" && "active"} onClick={() => setUnit("metric")}>&#8451;</button>
              <button className={unit === "imperial" && "active"} onClick={() => setUnit("imperial")}>&#8457;</button>
            </div>
            <div className="profile">
              <img src={userProfile} alt="profile" />
            </div>
          </div>
          <WeatherCards />
        </div>
        <div className='right-bottom'>
          <Hightlights />
        </div>
      </div>
    </div>
  );
}
