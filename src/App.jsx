import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Week from './pages/Week'
import NotFound from './pages/NotFound'
import SearchWeather from './components/SearchWeather'
import HomeEn from './pages/HomeEn'
import Event from './pages/Event'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/today" element={<Today />}></Route>
         <Route path="/week" element={<Week />}></Route>
         <Route path="/*" element={<NotFound />}></Route>
         <Route path="/weather" element={<SearchWeather />}></Route>
         <Route path="/en" element={<HomeEn />}></Route>
         <Route path="/event" element={<Event />}></Route>
      </Routes>
   )
}

export default App
