import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import './CSS/SearchWeather.css'

function SearchWeather() {
   const [weather, setWeather] = useState(null)
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(true)
   const location = useLocation()
   const params = new URLSearchParams(location.search)
   const city = params.get('city')

   useEffect(() => {
      const fetchWeather = async () => {
         try {
            setLoading(true)
            const res = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
               params: {
                  q: city,
                  appid: import.meta.env.VITE_WEATHER_API_KEY,
                  units: 'metric',
                  lang: 'kr',
               },
            })
            setWeather(res.data)
            setError(null)
         } catch (error) {
            setError(alert(`해당 도시의 날씨 정보를 불러올 수 없습니다. ${error}`))
            setWeather(null)
         } finally {
            setLoading(false)
         }
      }

      if (city) fetchWeather()
   }, [city])

   if (loading) return <p>날씨 불러오는 중...</p>
   if (error) return <p>{error}</p>

   const iconCode = weather.weather[0].icon
   const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

   return (
      <div className="searchweather">
         <h2>지금, {weather.name}의 날씨는</h2>
         <div>
            <img src={iconUrl} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
            <p>{weather.main.temp.toFixed(1)}℃</p>
         </div>
      </div>
   )
}

export default SearchWeather
