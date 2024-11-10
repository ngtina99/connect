import './App.scss'
import '@styles/examplePage.scss'

import { useStateTogether } from 'react-together'
import Map from './components/Background';
import Navbar from '@components/Navbar';
import Main from './components/Main';

import { version } from '@package'
import { HeroLogo } from '@components'
import CursorEllipse from '@components/CursorEllipse';

export default function App() {
  const [count, set_count] = useStateTogether('counter_0', 0)

  return (
    <div>
      <Navbar/>
      {/* <div>
        <HeroLogo {...{ type: 'reacttogether' }} />
        <HeroLogo {...{ type: 'react' }} />
        <HeroLogo {...{ type: 'vite' }} />
      </div> */}
      <CursorEllipse />
      <Map />
      <div className='version-num'>{version}</div>
    </div>
  )
}
