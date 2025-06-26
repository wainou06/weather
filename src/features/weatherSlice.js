import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getToday, getWeek, getAirPollution } from '../api/weatherApi'

// 오늘
export const fetchTodayWeather = createAsyncThunk('weathers/fetchTodayWeather', async ({ category }) => {
   const response = await getToday(category)

   return response.data
})

// 이번주
export const fetchWeekWeather = createAsyncThunk('weathers/fetchWeekWeather', async ({ category }) => {
   const response = await getWeek(category)

   return response.data
})

// 대기질

export const fetchAirQuality = createAsyncThunk('weathers/fetchAirQuality', async () => {
   const data = await getAirPollution()
   return data
})

const weatherSlice = createSlice({
   name: 'weathers',
   initialState: {
      todays: null,
      loadingtoday: false,
      errortoday: null,
      weekend: null,
      loadingweek: false,
      errorweek: null,
      air: null,
      loadingAir: false,
      errorAir: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchTodayWeather.pending, (state, action) => {
            state.loadingtoday = true
            state.errortoday = null
         })
         .addCase(fetchTodayWeather.fulfilled, (state, action) => {
            state.loadingtoday = false
            state.todays = action.payload
         })
         .addCase(fetchTodayWeather.rejected, (state, action) => {
            state.loadingtoday = false
            state.errortoday = action.error.message
         })
         .addCase(fetchWeekWeather.pending, (state, action) => {
            state.loadingweek = true
            state.errorweek = null
         })
         .addCase(fetchWeekWeather.fulfilled, (state, action) => {
            state.loadingweek = false
            state.weekend = action.payload
         })
         .addCase(fetchWeekWeather.rejected, (state, action) => {
            state.loadingweek = false
            state.errorweek = action.error.message
         })
         .addCase(fetchAirQuality.pending, (state) => {
            state.loadingAir = true
            state.errorAir = null
         })
         .addCase(fetchAirQuality.fulfilled, (state, action) => {
            state.loadingAir = false
            state.air = action.payload
         })
         .addCase(fetchAirQuality.rejected, (state, action) => {
            state.loadingAir = false
            state.errorAir = action.payload
         })
   },
})

export default weatherSlice.reducer
