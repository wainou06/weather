import { NavLink } from 'react-router-dom'

function NotFound() {
   return (
      <div style={{ margin: '70px auto', width: '720px', textAlign: 'center' }}>
         <h1>페이지를 찾을 수 없습니다.</h1>
         <NavLink to="/">
            <img src="/images/not found.png" alt="페이지 없음" />
         </NavLink>
         <h1>SORRY, NOT FOUND</h1>
      </div>
   )
}

export default NotFound
