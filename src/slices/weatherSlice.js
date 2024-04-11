import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: null,
    unit: "metric",
    location: "Mumbai",
    latLong: { lat: 44.34, lon: 10.99 },
    locationImage: null
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
  },
})

// Action creators are generated for each case reducer function
export const { setWeather, setUnit, setLatLong, setLocation, setLocationImage } = weatherSlice.actions

export default weatherSlice.reducer