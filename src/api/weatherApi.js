import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
const AUTH_KEY = import.meta.env.VITE_WEATHER_API_KEY

const weatherApi = axios.create({
   baseURL: BASE_URL,
})

// 오늘 날씨
export const getToday = async (category = 'weather') => {
   try {
      const response = await weatherApi.get(`/${category}`, {
         params: {
            q: 'incheon',
            appid: AUTH_KEY,
            units: 'metric',
            lang: 'kr',
         },
      })
      return response
   } catch (error) {
      console.error('오늘 날씨 API 오류:', error)
      throw error
   }
}

// 이번주 날씨
export const getWeek = async (category = 'forecast') => {
   try {
      const response = await weatherApi.get(`/${category}`, {
         params: {
            q: 'incheon',
            appid: AUTH_KEY,
            units: 'metric',
            lang: 'kr',
         },
      })
      return response
   } catch (error) {
      console.error('이번주 날씨 API 오류:', error)
      throw error
   }
}

// 대기질
export const getAirPollution = async (category = 'air_pollution') => {
   try {
      const response = await weatherApi.get(`/${category}/forecast`, {
         params: {
            lat: 37.45,
            lon: 126.4161,
            appid: AUTH_KEY,
         },
      })
      return response.data
   } catch (error) {
      console.error('공기 대기질 API 오류:', error)
      throw error
   }
}

export default weatherApi
