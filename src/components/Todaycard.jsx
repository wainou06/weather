import './CSS/Todaycard.css'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodayWeather } from '../features/weatherSlice'

function Todaycard() {
   const dispatch = useDispatch()

   const { todays, loading, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      dispatch(fetchTodayWeather({ category: 'weather' }))
   }, [dispatch])

   // 오늘 날씨
   const renderWeather = () => {
      if (loading || !todays) return <p>날씨 불러오는 중...</p>
      if (error) return <p>날씨 오류: {error}</p>

      const { main, rain, wind } = todays
      const temp = main?.feels_like
      const humi = main?.humidity
      const rainmm = rain?.['1h'] ?? 0
      const windspeed = wind?.speed

      return (
         <div className="weather-cards">
            <div className="card">
               <h4>체감온도</h4>
               <p>{temp.toFixed(1)}℃</p>
            </div>
            <div className="card">
               <h4>강수량</h4>
               <p>{rainmm === 0 ? '0' : rainmm.toFixed(1)} mm</p>
            </div>
            <div className="card">
               <h4>바람</h4>
               <p>{windspeed}m/s</p>
            </div>
            <div className="card">
               <h4>습도</h4>
               <p>{humi}%</p>
            </div>
         </div>
      )
   }

   return <>{renderWeather()}</>
}

export default Todaycard
