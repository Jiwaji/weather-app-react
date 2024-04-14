import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: null,
    unit: "metric",
    location: "Mumbai",
    latLong: { lat: 19.0785451, lon: 72.878176 },
    locationImage: null,
    showWeeklyWeather: true,
  },
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload
    },
    setUnit: (state, action) => {
      state.unit = action.payload
    },
    setLocation: (state, action) => {
      state.location = action.payload
    },
    setLatLong: (state, action) => {
      state.latLong = action.payload
    },
    setLocationImage: (state, action) => {
      state.locationImage = action.payload
    },
    setShowWeeklyWeather: (state, action) => {
      state.showWeeklyWeather = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  setWeather,
  setUnit,
  setLatLong,
  setLocation,
  setLocationImage,
  setShowWeeklyWeather
} = weatherSlice.actions

export default weatherSlice.reducer