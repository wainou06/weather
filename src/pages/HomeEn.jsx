// 메인
import { Wrap, Main, Section } from '../styles/StyledComponents'

import Menu from '../components/en/Menu'
import Footer from '../components/Footer'
import Maintop from '../components/en/Maintop'
import Mainweek from '../components/en/Mainweek'
import Mainevent from '../components/en/Mainevent'

function HomeEn() {
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

export default HomeEn
