import './CSS/Weekcard.css'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeekWeather } from '../features/weatherSlice'

function Weekcard() {
   const dispatch = useDispatch()

   const { weekend, loadingweek, errorweek } = useSelector((state) => state.weathers)

   useEffect(() => {
      dispatch(fetchWeekWeather({ category: 'forecast' }))
   }, [dispatch])

   // 이번주 날씨
   const renderWeekWeather = () => {
      if (loadingweek || !weekend) return <p>날씨 불러오는 중...</p>
      if (errorweek) return <p>날씨 오류: {errorweek}</p>

      const dailyData = weekend.list.filter((item) => item.dt_txt.includes('12:00:00'))
      return (
         <div className="weekcard">
            {dailyData.map((day, index) => {
               const date = new Date(day.dt_txt)
               const weekday = date.toLocaleDateString('ko-KR', { weekday: 'short' })
               const temp = day.main.temp.toFixed(1)
               const icon = day.weather[0].icon
               const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
               const description = day.weather[0].description

               return (
                  <div className="day" key={index}>
                     <div>
                        <img src={iconUrl} alt={description} />
                        <p style={{ textAlign: 'center' }}>{weekday}</p>
                     </div>
                     <p>{temp}℃</p>
                     <p className="description-text" style={{ textAlign: 'center' }}>
                        {description}
                     </p>
                  </div>
               )
            })}
         </div>
      )
   }

   return <div className="weekcards">{renderWeekWeather()}</div>
}

export default Weekcard
