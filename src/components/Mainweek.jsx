import './CSS/Mainweek.css'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeekWeather } from '../features/weatherSlice'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'

// import required modules
import { Scrollbar } from 'swiper/modules'

function Mainweek() {
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
         <Swiper
            slidesPerView={4}
            spaceBetween={30}
            scrollbar={{
               hide: true,
            }}
            modules={[Scrollbar]}
            className="week-weather"
         >
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
                  <SwiperSlide className="day-card" key={index}>
                     <div>
                        <p>{weekday}</p>
                        <p>{dateLabel}</p>
                     </div>
                     <div>
                        <img src={iconUrl} alt={description} />
                     </div>
                     <p>{temp}℃</p>
                     <p>{description}</p>
                  </SwiperSlide>
               )
            })}
         </Swiper>
      )
   }

   return (
      <div className="week-section">
         <h2 style={{ color: '#505252', fontWeight: '500', paddingBottom: '40px' }}>이번 주, 인천은</h2>
         {renderWeekWeather()}
      </div>
   )
}

export default Mainweek
