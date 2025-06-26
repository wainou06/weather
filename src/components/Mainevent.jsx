// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import './CSS/Mainevent.css'

// import required modules
import { Navigation } from 'swiper/modules'

export default function Mainevent() {
   return (
      <div className="event">
         <h2>지금 볼만한 이벤트</h2>
         <Swiper slidesPerView={4} spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
               <div></div>
               <p>축제</p>
            </SwiperSlide>
            <SwiperSlide>
               <div></div>
               <p>행사</p>
            </SwiperSlide>
            <SwiperSlide>
               <div></div>
               <p>박람회</p>
            </SwiperSlide>
            <SwiperSlide>
               <div></div>
               <p>미술전시</p>
            </SwiperSlide>
            <SwiperSlide>
               <div></div>
               <p>공연</p>
            </SwiperSlide>
         </Swiper>
      </div>
   )
}
