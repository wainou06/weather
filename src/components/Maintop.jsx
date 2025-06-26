import './CSS/Maintop.css'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodayWeather, fetchAirQuality } from '../features/weatherSlice'

function Maintop() {
   const dispatch = useDispatch()

   const { todays, air, loading, error, loadingAir, errorAir } = useSelector((state) => state.weathers)

   useEffect(() => {
      dispatch(fetchTodayWeather({ category: 'weather' }))
      dispatch(fetchAirQuality())
   }, [dispatch])

   // 오늘 날씨
   const renderWeather = () => {
      if (loading || !todays) return <p>날씨 불러오는 중...</p>
      if (error) return <p>날씨 오류: {error}</p>

      const { weather, main } = todays
      const description = weather[0]?.description
      const temp = main?.temp
      const icon = weather[0]?.icon
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

      return (
         <div className="weather-info">
            <div style={{ width: 100}}>
               <img src={iconUrl} alt={description} />
               <p>{description}</p>
            </div>
            <p style={{ fontSize: '50px' }}>{temp.toFixed(1)}℃</p>
         </div>
      )
   }

   // 대기질
   const renderAirQuality = () => {
      if (loadingAir || !air) return <p>대기질 불러오는 중...</p>
      if (errorAir) return <p>대기질 오류: {errorAir}</p>

      const aqi = air.list?.[0]?.main?.aqi
      const pm10 = air.list?.[0]?.components?.pm10
      const pm25 = air.list?.[0]?.components?.pm2_5

      const aqiText = {
         1: '좋음',
         2: '보통',
         3: '나쁨',
         4: '매우 나쁨',
         5: '위험',
      }

      const aqiIcon = {
         1: '😄',
         2: '🙂',
         3: '☹️',
         4: '😡',
         5: '💀',
      }

      const getFineDustLevel = (value) => {
         if (value <= 30) return 1
         if (value <= 80) return 2
         if (value <= 150) return 3
         if (value <= 200) return 4
         return 5
      }

      const pm10Level = getFineDustLevel(pm10)
      const pm25Level = getFineDustLevel(pm25)

      return (
         <div className="air-info">
            <div className="aqi">
               <p>미세먼지</p>
               <p style={{ fontSize: '45px', height: '70px' }}>{aqiIcon[pm10Level] || '❓'}</p>
               <p>{aqiText[pm10Level] || '❓'}</p>
            </div>
            <div className="aqi">
               <p>초미세먼지</p>
               <p style={{ fontSize: '45px', height: '70px' }}>{aqiIcon[pm25Level] || '❓'}</p>
               <p>{aqiText[pm25Level] || '❓'}</p>
            </div>
         </div>
      )
   }

   return (
      <div className="background">
         <div>
            <h1>지금, 인천은</h1>
            <div className="render">
               {renderWeather()}
               {renderAirQuality()}
            </div>
         </div>
      </div>
   )
}

export default Maintop
