import './CSS/EventSlider.css'

import { Section } from '../styles/StyledComponents'

const eventlist = {
   festival: [{ id: '1', name: '소래포구 축제', date: '2025.09.26 ~ 2025.09.28' }],
   event: [{ id: '1', name: '소래포구 축제', date: '2025.09.26 ~ 2025.09.28' }],
   fair: [{ id: '1', name: '소래포구 축제', date: '2025.09.26 ~ 2025.09.28' }],
   art: [{ id: '1', name: '소래포구 축제', date: '2025.09.26 ~ 2025.09.28' }],
   performance: [{ id: '1', name: '소래포구 축제', date: '2025.09.26 ~ 2025.09.28' }],
}

console.log(eventlist)

function EventSlider() {
   return (
      <div className="eventwrap">
         <Section className="festival"></Section>
         <Section className="event"></Section>
         <Section className="fair"></Section>
         <Section className="art"></Section>
         <Section className="performance" $marginB="70px"></Section>
      </div>
   )
}

export default EventSlider
