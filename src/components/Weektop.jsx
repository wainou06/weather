import './CSS/Weektop.css'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeekWeather } from '../features/weatherSlice'

function Weektop() {
   const dispatch = useDispatch()

   const { weekend, loadingweek, errorweek } = useSelector((state) => state.weathers)

   useEffect(() => {
      dispatch(fetchWeekWeather({ category: 'forecast' }))
   }, [dispatch])

   // 이번주 날씨
   const renderWeekWeather = () => {
      if (loadingweek || !weekend) return <p>날씨 불러오는 중...</p>
      if (errorweek) return <p>날씨 오류: {error}</p>

      const dailyData = weekend.list.filter((item) => item.dt_txt.includes('12:00:00'))
      return (
         <div className="week-weather">
            {dailyData.map((day, index) => {
               const date = new Date(day.dt_txt)
               const weekday = date.toLocaleDateString('ko-KR', { weekday: 'short' })
               const month = date.getMonth() + 1
               const dayNum = date.getDate()
               const dateLabel = `${month}.${dayNum}.`
               const temp = day.main.temp.toFixed(1)
               const icon = day.weather[0].icon
               const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
               const description = day.weather[0].description

               return (
                  <div className="day-card" key={index}>
                     <div>
                        <p>{weekday}</p>
                        <p>{dateLabel}</p>
                     </div>
                     <div>
                        <img src={iconUrl} alt={description} />
                     </div>
                     <p>{temp}℃</p>
                     <p>{description}</p>
                  </div>
               )
            })}
         </div>
      )
   }

   return (
      <div className="weektop-section">
         <h2 style={{ color: 'white', fontWeight: '500', paddingBottom: '40px' }}>이번 주, 인천은</h2>
         {renderWeekWeather()}
      </div>
   )
}

export default Weektop
