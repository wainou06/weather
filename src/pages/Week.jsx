import { Wrap, Main, Section } from '../styles/StyledComponents'

import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Weektop from '../components/Weektop'
import Weekcard from '../components/Weekcard'

function Week() {
   return (
      <Wrap>
         <Menu />
         <Main className="week">
            <Section $height="660px">
               <Weektop />
            </Section>
            <Section $height="185px" $marginB="70px">
               <Weekcard />
            </Section>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Week
