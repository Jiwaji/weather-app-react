import { useSelector, useDispatch } from 'react-redux'

import WeatherCards from '../weather_cards/WeatherCards'
import Hightlights from '../highlights/Highlights'

import { setUnit } from '../../slices/weatherSlice'

import userProfile from '../../assets/profile.jpg'

export default function WeatherDetails() {
    const unit = useSelector((state) => state.unit)
    const dispatch = useDispatch()
    return (
        <div className="right">
        {/* <WeeklyWeahter /> */}
        <div className="right-top">
          <div className="header">
            <div className="tab">
              <button>Today</button>
              <button className='active'>Week</button>
            </div>
            <div className="unit">
              <button className={`${unit === "metric" ? "active" : ""}`} onClick={() => dispatch(setUnit("metric"))}>&#8451;</button>
              <button className={`${unit === "imperial" ? "active" : ""}`}  onClick={() => dispatch(setUnit("imperial"))}>&#8457;</button>
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
    )
}