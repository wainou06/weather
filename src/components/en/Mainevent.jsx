// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import '../CSS/Mainevent.css'

// import required modules
import { Navigation } from 'swiper/modules'

import { NavLink } from 'react-router-dom'

export default function Mainevent() {
   return (
      <div className="event">
         <h2>An event worth watching</h2>
         <Swiper slidesPerView={4} spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
               <NavLink to="/event">
                  <div></div>
                  <p>Festival</p>
               </NavLink>
            </SwiperSlide>
            <SwiperSlide>
               <NavLink to="/event">
                  <div></div>
                  <p>Event</p>
               </NavLink>
            </SwiperSlide>
            <SwiperSlide>
               <NavLink to="/event">
                  <div></div>
                  <p>Fair</p>
               </NavLink>
            </SwiperSlide>
            <SwiperSlide>
               <NavLink to="/event">
                  <div></div>
                  <p>An art exhibition</p>
               </NavLink>
            </SwiperSlide>
            <SwiperSlide>
               <NavLink to="/event">
                  <div></div>
                  <p>Performance</p>
              </NavLink>
            </SwiperSlide>
         </Swiper>
      </div>
   )
}
