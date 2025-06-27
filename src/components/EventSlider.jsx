import './CSS/EventSlider.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

const eventlist = {
   festival: [
      { id: '1', name: '소래포구 축제', date: '2025.09.26 ~ 2025.09.28' },
      { id: '2', name: '남동 빛의 거리', date: '2024.10.22 ~ 2025.12.31' },
      { id: '3', name: '부평풍물대축제', date: '2025.09.26 ~ 2025.09.28' },
      { id: '4', name: '계양아라온워터축제', date: '2025.07.26 ~ 2025.07.27' },
      { id: '5', name: '연수 능허대 문화축제', date: '2025.10.17 ~ 2025.10.19' },
      { id: '6', name: '드림파크 국화축제', date: '2025.10.24 ~ 2025.11.02' },
   ],
   event: [
      { id: '1', name: '1883 상상플랫폼 야시장', date: '2025.06.20 ~ 2025.06.29' },
      { id: '2', name: '월미·개항장 야간마켓', date: '2025.06.20 ~ 2025.07.26' },
   ],
   fair: [{ id: '1', name: '인천 반려동물 박람회', date: '2025.06.27 ~ 2025.06.29' }],
   art: [
      { id: '1', name: 'Under the sunlight', date: '2025.05.23 ~ 2025.07.16', place: '덴아트갤러리' },
      { id: '2', name: '우리 박물관의 기구한 손님들', date: '2025.06.10 ~ 2025.08.10', place: '인천광역시립박물관' },
      { id: '3', name: '우리가 보는 시선', date: '2025.05.28 ~ 2025.07.21', place: '서창어울마당' },
      { id: '4', name: '오다솔 : 결 안으로', date: '2025.06.04 ~ 2025.07.04', place: '폴스페이스갤러리' },
      { id: '5', name: '용현동 : 흘러와, 흘러간 동네', date: '2025.06.02 ~ 2025.07.12', place: '허름한미술관' },
      { id: '6', name: '최힘찬 : 소용없는 기도', date: '2025.06.01 ~ 2025.07.31', place: '뻘다방' },
      { id: '7', name: '헬로우, 아티스트', date: '2025.05.01 ~ 2025.07.20', place: '부평아트센터' },
   ],
   performance: [
      { id: '1', name: '스쿨매직 콘서트', date: '2025.06.24 ~ 2025.06.28' },
      { id: '2', name: '금도끼 은도끼', date: '2025.06.24 ~ 2025.06.28' },
      { id: '3', name: '스파이 엑스', date: '2025.05.03 ~ 2025.08.31' },
      { id: '4', name: '스탠드업 코미디', date: '2025.05.03 ~ 2025.08.31' },
   ],
}

console.log(eventlist)

function isOngoing(dateRange) {
   const [startStr, endStr] = dateRange.split(' ~ ')
   const today = new Date()
   const startDate = new Date(startStr.replace(/\./g, '-'))
   const endDate = new Date(endStr.replace(/\./g, '-'))

   if (today < startDate) {
      const diffTime = startDate - today
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return `D-${diffDays}`
   } else if (today >= startDate && today <= endDate) {
      return '행사 중'
   } else {
      return '종료됨'
   }
}

const Card = ({ name, date, place }) => {
   const ongoing = isOngoing(date)

   return (
      <div className="eventcard">
         <div className="poster">
            <div className={`${ongoing === '행사 중' ? 'ing' : 'not'}`}>{ongoing}</div>
         </div>
         <h3 className="text-lg font-semibold">{name}</h3>
         <p className="text-sm text-gray-600">{date}</p>
         {place && <p className="text-sm text-gray-500 mt-1">장소: {place}</p>}
      </div>
   )
}

const Section = ({ title, items }) => (
   <div className={title}>
      <h2>{title}</h2>
      <Swiper
         slidesPerView={4}
         spaceBetween={30}
         pagination={{
            clickable: true,
         }}
         modules={[Pagination]}
         className="eventcards"
      >
         {items.map((item) => (
            <SwiperSlide>
               <Card key={item.id} {...item} />
            </SwiperSlide>
         ))}
      </Swiper>
   </div>
)

export default function EventSlider() {
   return (
      <div className="eventwrap">
         <Section title="Festival" items={eventlist.festival} />
         <Section title="Event" items={eventlist.event} />
         <Section title="Fair" items={eventlist.fair} />
         <Section title="Art" items={eventlist.art} />
         <Section title="Performance" items={eventlist.performance} />
      </div>
   )
}
