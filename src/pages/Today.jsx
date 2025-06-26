import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Suntime from '../components/Suntime'
import Todaycard from '../components/Todaycard'
import Todaytop from '../components/Todaytop'

import { Main, Wrap, Section } from '../styles/StyledComponents'

function Today() {
   return (
      <Wrap>
         <Menu />
         <Main className="today">
            <Section $height="465px">
               <Todaytop />
            </Section>
            <Section $height="135px">
               <Todaycard />
            </Section>
            <Section $height="305px" $marginB="70px">
               <Suntime />
            </Section>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Today
