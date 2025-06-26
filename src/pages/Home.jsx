// 메인
import { Wrap, Main, Section } from '../styles/StyledComponents'

import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Maintop from '../components/Maintop'
import Mainweek from '../components/Mainweek'
import Mainevent from '../components/Mainevent'

function Home() {
   return (
      <Wrap>
         <Menu />
         <Main className="home">
            <Section $width="100%">
               <Maintop />
            </Section>
            <Section>
               <Mainweek />
            </Section>
            <Section $height="630px" $marginB="70px">
               <Mainevent />
            </Section>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Home
