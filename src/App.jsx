import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Week from './pages/Week'
import NotFound from './pages/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/today" element={<Today />}></Route>
         <Route path="/week" element={<Week />}></Route>
         <Route path="/*" element={<NotFound />}></Route>
      </Routes>
   )
}

export default App
