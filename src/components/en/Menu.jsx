import '../CSS/Menu.css'
import { NavLink } from 'react-router-dom'

//mui
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'

import LanguageIcon from '@mui/icons-material/Language'
import SearchIcon from '@mui/icons-material/Search'

//Styled
import { List } from '../../styles/StyledComponents'

function Menu() {
   //mui
   const [Language, setLanguage] = useState('')

   const handleChange = (event) => {
      const selectedLang = event.target.value
      setLanguage(selectedLang)

      switch (selectedLang) {
         case 'ko':
            window.location.href = '/'
            break
         case 'en':
            window.location.href = '/en'
            break
         case 'jp':
            window.location.href = '/jp'
            break
         case 'chn':
            window.location.href = '/chn'
            break
         default:
            break
      }
   }

   const [city, setCity] = useState('')

   const handleInputChange = (e) => {
      setCity(e.target.value)
   }

   const handleSearch = () => {
      if (!city.trim()) {
         alert('검색어를 입력해주세요.')
         return
      }
      window.location.href = `/weather?city=${encodeURIComponent(city)}`
   }

   return (
      <header>
         <nav>
            <div className="header_top">
               <NavLink to="/">
                  <img src="/images/로고.png" alt="인천광역시 로고" width="318" height="90" />
               </NavLink>
               <ul>
                  <li>Login</li>
                  <li>
                     Create <br />
                     an Account
                  </li>
                  <li>
                     <FormControl sx={{ m: 1, minWidth: 158 }} size="small">
                        <InputLabel id="demo-select-small-label">
                           <LanguageIcon style={{ color: '#2D2B6F' }} />
                           Language
                        </InputLabel>
                        <Select labelId="demo-select-small-label" id="demo-select-small" value={Language} label="ico.Language" onChange={handleChange}>
                           <MenuItem value={'ko'}>한국어</MenuItem>
                           <MenuItem value={'en'}>English</MenuItem>
                           <MenuItem value={'jp'}>日本語</MenuItem>
                           <MenuItem value={'chn'}>漢語</MenuItem>
                        </Select>
                     </FormControl>
                  </li>
               </ul>
            </div>
            <div className="header_menu">
               <ul className="menu_list">
                  <li>
                     <NavLink to="/today">
                        <List>Today's weather</List>
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/">
                        <List>Today's air</List>
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/week">
                        <List>This week's weather</List>
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/*">
                        <List>Event</List>
                     </NavLink>
                  </li>
               </ul>
               <div className="search">
                  <input type="text" placeholder="Search for weather in other areas (please search in English for city)" value={city} onChange={handleInputChange} />

                  <button onClick={handleSearch}>
                     <SearchIcon style={{ color: '#fff', fontSize: '30px' }} />
                  </button>
               </div>
            </div>
         </nav>
      </header>
   )
}

export default Menu
