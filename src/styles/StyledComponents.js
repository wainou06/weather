import styled from 'styled-components'

export const Wrap = styled.div`
   overflow: hidden;
   min-width: 1440px;
`

export const Main = styled.main`
   overflow: hidden;
`

export const Section = styled.div`
   width: ${(props) => props.$width || '1320px'};
   height: ${(props) => props.$height || '515px'};
   margin: 0 auto;
   margin-bottom: ${(props) => props.$marginB || '35px'};
`

export const List = styled.p`
   &:hover {
      color: #2d2b6f;
   }
`
export const Sun = styled.div`
   background-color: ${(props) => props.$backgroundColor || '#7C3123'};
   width: ${(props) => props.$width || '305px'};
   height: ${(props) => props.$height || '305px'};
   border-radius: 50%;
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
`
