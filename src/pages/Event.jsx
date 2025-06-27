import { Wrap, Main } from '../styles/StyledComponents'

import Menu from '../components/Menu'
import Footer from '../components/Footer'
import EventSlider from '../components/EventSlider'

function Event() {
   return (
      <Wrap>
         <Menu />
         <Main>
            <EventSlider />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Event
