import './App.scss'
import '@styles/examplePage.scss'

import { useStateTogether } from 'react-together'
import MapboxExample from './components/MapboxExample'
import Map from './components/Background'
import Navbar from '@components/Navbar'
import ClickableWrapper from '@components/ClickableSection'
import MainPage from '@components/Main/Main'

import { version } from '@package'
import { HeroLogo } from '@components'
import CursorEllipse from '@components/CursorEllipse'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '@pages/LandingPage'

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        {/* <CursorEllipse /> */}
        <Route path='/' element={<MainPage />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/map' element={<LandingPage />} />
        {/* <MapboxExample/> */}
      </Routes>
      <div className='version-num'>{version}</div>
    </div>
  )
}
