import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { setWeather, setLatLong, setLocation, setLocationImage } from '../../slices/weatherSlice';

import searchIcon from '../../assets/search.svg';
import detectIcon from '../../assets/detect.svg';

export default function CurrentWeather() {
    const weather = useSelector((state) => state.weather)
    const unit = useSelector((state) => state.unit)
    const locationImage = useSelector((state) => state.locationImage)
    const location = useSelector((state) => state.location)
    const latLong = useSelector((state) => state.latLong)

    const dispatch = useDispatch()

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
            dispatch(setWeather(data))
        } catch (error) {
            console.log(error)
        }
    }, [WEATHER_URL, OWM_API_KEY, unit, dispatch])

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
                    dispatch(setLatLong({ lat, lon }))
                }
            }
        } catch (error) {
            console.log(error)
        }
    }, [LOCATION_URL, OWM_API_KEY, location, dispatch])

    const getLocationImage = useCallback(async () => {
        try {
            const url = `${LOCATION_IMAGE_URL}?query=${location}&page=1&client_id=${UNSPLASH_KEY}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            if (data.results.length) {
                dispatch(setLocationImage(data.results[0].urls.full))
            }
        } catch (error) {
            console.log(error)
        }
    }, [LOCATION_IMAGE_URL, UNSPLASH_KEY, location, dispatch])

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
        <div className="left">
            <div className="left-inner">
                <div className="searchbar">
                    <div className="search-icon">
                        <img src={searchIcon} alt="search icon" />
                    </div>
                    <input type="text" placeholder="Search for places..." onChange={(e) => dispatch(setLocation(e.target.value))} />
                    {/* <AutoComplete/> */}
                    <div className="detect-location-icon">
                        <button className='detect-location' onClick={() => getWeatherByCurrentLocation()}><img src={detectIcon} alt="detect icon" /></button>
                    </div>
                </div>
                <div className="current-temp">
                    <div className="temp-img">
                        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@4x.png`} alt="weather" />
                    </div>
                    <p className="temp">{weather?.main?.temp} {unit === "metric" ? <span>&#8451;</span> : <span>&#8457;</span>}</p>
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
    )
}