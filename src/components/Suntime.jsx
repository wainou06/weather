import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodayWeather } from '../features/weatherSlice'

import './CSS/Suntime.css'
import { Sun } from '../styles/StyledComponents'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

function Suntime() {
   const dispatch = useDispatch()

   const { todays, loading, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      dispatch(fetchTodayWeather({ category: 'weather' }))
   }, [dispatch])

   // 일출, 일몰
   const renderSuntime = () => {
      if (loading || !todays) return <p>불러오는 중...</p>
      if (error) return <p>오류: {error}</p>

      const { sys } = todays
      const sunriseTime = new Date(sys.sunrise * 1000).toLocaleTimeString('ko-KR', {
         hour: '2-digit',
         minute: '2-digit',
      })
      const sunsetTime = new Date(sys.sunset * 1000).toLocaleTimeString('ko-KR', {
         hour: '2-digit',
         minute: '2-digit',
      })

      return (
         <div className="suntime">
            <div className="sunrise">
               <p>
                  <ArrowUpwardIcon sx={{ fontSize: 110, color: '#D3643F' }} />
               </p>
               <div className="half">
                  <Sun $backgroundColor="#D3643F"></Sun>
               </div>
               <p>일출 {sunriseTime}</p>
            </div>
            <div>
               <Sun>
                  <Sun $backgroundColor="#D3643F" $width="270px" $height="270px">
                     <Sun $backgroundColor="#FFBB00" $width="230px" $height="230px">
                        <p>
                           자외선
                           <br />
                           보통
                        </p>
                     </Sun>
                  </Sun>
               </Sun>
            </div>
            <div className="sunset">
               <p>
                  <ArrowUpwardIcon sx={{ fontSize: 110, color: '#2D2B6F', transform: 'rotate(180deg)' }} />
               </p>
               <div className="half">
                  <Sun $backgroundColor="#2D2B6F"></Sun>
               </div>
               <p>일몰 {sunsetTime}</p>
            </div>
         </div>
      )
   }

   return <>{renderSuntime()}</>
}

export default Suntime
