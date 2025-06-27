// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import './CSS/Mainevent.css'

// import required modules
import { Navigation } from 'swiper/modules'

import { NavLink } from 'react-router-dom'

export default function Mainevent() {
   return (
      <div className="event">
         <h2>지금 볼만한 이벤트</h2>
         <Swiper slidesPerView={4} spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
               <NavLink to="/event">
                  <div></div>
                  <p>
                     <b>축제</b> / 7개 축제
                  </p>
               </NavLink>
            </SwiperSlide>
            <SwiperSlide>
               <NavLink to="/event">
                  <div></div>
                  <p>
                     <b>행사</b> / 2개 행사
                  </p>
               </NavLink>
            </SwiperSlide>
            <SwiperSlide>
               <NavLink to="/event">
                  <div></div>
                  <p>
                     <b>박람회</b> / 1개 박람회
                  </p>
               </NavLink>
            </SwiperSlide>
            <SwiperSlide>
               <NavLink to="/event">
                  <div></div>
                  <p>
                     <b>미술전시</b>/ 18개 전시
                  </p>
               </NavLink>
            </SwiperSlide>
            <SwiperSlide>
               <NavLink to="/event">
                  <div></div>
                  <p>
                     <b>공연</b> / 109개 공연
                  </p>
               </NavLink>
            </SwiperSlide>
         </Swiper>
      </div>
   )
}
