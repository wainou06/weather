// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import '../CSS/Mainevent.css'

// import required modules
import { Navigation } from 'swiper/modules'

export default function Mainevent() {
   return (
      <div className="event">
         <h2>An event worth watching</h2>
         <Swiper slidesPerView={4} spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
               <div></div>
               <p>Festival</p>
            </SwiperSlide>
            <SwiperSlide>
               <div></div>
               <p>Event</p>
            </SwiperSlide>
            <SwiperSlide>
               <div></div>
               <p>Fair</p>
            </SwiperSlide>
            <SwiperSlide>
               <div></div>
               <p>An art exhibition</p>
            </SwiperSlide>
            <SwiperSlide>
               <div></div>
               <p>Performance</p>
            </SwiperSlide>
         </Swiper>
      </div>
   )
}
