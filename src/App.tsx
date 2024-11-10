import './App.scss'
import '@styles/examplePage.scss'

import { useStateTogether } from 'react-together'
import MapboxExample from './components/MapboxExample'
import Map from './components/Background'
import Navbar from '@components/Navbar'
import ClickableWrapper from '@components/ClickableSection'
import Main from './components/Main'

import { version } from '@package'
import { HeroLogo } from '@components'
import CursorEllipse from '@components/CursorEllipse'

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <CursorEllipse />
      <div id='map' className='section'>
        <MapboxExample />
      </div>
      <div className='version-num'>{version}</div>
    </div>
  )
}
