import { useState, useEffect, useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import WeatherCards from '../weather_cards/WeatherCards'
import Hightlights from '../highlights/Highlights'

import { setUnit, setShowWeeklyWeather } from '../../slices/weatherSlice'

import userProfile from '../../assets/profile.jpg'

import { API_URLS } from '../../constants'

export default function WeatherDetails() {
  const unit = useSelector((state) => state.unit)
  const showWeeklyWeather = useSelector((state) => state.showWeeklyWeather)

  const dispatch = useDispatch()

  const [weatherData, setWeatherData] = useState(null)
  const [filteredData, setFilteredData] = useState([])

  const OWM_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  const latLong = useSelector((state) => state.latLong)

  const getWeeklyWeather = useCallback(async () => {
    try {
      const { lat, lon } = latLong
      const url = `${API_URLS.WEATHER_16D}?lat=${lat}&lon=${lon}&units=${unit}&appid=${OWM_API_KEY}`
      const res = await fetch(url)
      const data = await res.json()
      setWeatherData(data)
    } catch (error) {
      console.error(error)
    }
  }, [OWM_API_KEY, latLong, unit])

  const filterWeekData = useCallback(() => {
    let filterData = []
    if(showWeeklyWeather) {
      filterData = weatherData?.list?.filter(( item, index ) => index % 8 === 0)
    } else {
      filterData = weatherData?.list?.slice(0, 7)
    }
    setFilteredData(filterData)
  }, [showWeeklyWeather, weatherData])

  useEffect(() => {
    getWeeklyWeather()
  }, [getWeeklyWeather])

  useEffect(() => {
    filterWeekData()
  },[weatherData, showWeeklyWeather, filterWeekData])

  return (
    <div className="right">
      {/* <WeeklyWeahter /> */}
      <div className="right-top">
        <div className="header">
          <div className="tab">
            <button className={`${!showWeeklyWeather ? "active" : ""}`} onClick={() => dispatch(setShowWeeklyWeather(false))}>Today</button>
            <button className={`${showWeeklyWeather ? "active" : ""}`} onClick={() => dispatch(setShowWeeklyWeather(true))}>Week</button>
          </div>
          <div className="unit">
            <button className={`${unit === "metric" ? "active" : ""}`} onClick={() => dispatch(setUnit("metric"))}>&#8451;</button>
            <button className={`${unit === "imperial" ? "active" : ""}`} onClick={() => dispatch(setUnit("imperial"))}>&#8457;</button>
          </div>
          <div className="profile">
            <img src={userProfile} alt="profile" />
          </div>
        </div>
        <WeatherCards weatherList={filteredData} />
      </div>
      <div className='right-bottom'>
        <Hightlights />
      </div>
    </div>
  )
}