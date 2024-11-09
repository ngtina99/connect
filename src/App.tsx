import './App.scss'
import '@styles/examplePage.scss'

import { useStateTogether } from 'react-together'
import Map from './components/Map';
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
      <div>
        <HeroLogo {...{ type: 'reacttogether' }} />
        <HeroLogo {...{ type: 'react' }} />
        <HeroLogo {...{ type: 'vite' }} />
      </div>
      <CursorEllipse />
      {/* <Main />  */}
	  <h1>My Google Map</h1>
      <Map />
      <div className='card'>
        <button onClick={() => set_count((count) => count + 1) }>Synq'd count is {count}</button>
        {/* <button onClick={() => set_count((count) => count + 1)}>Synq'd count is {count}</button> */}
        <button {...{ style: { marginLeft: '1rem' }, onClick: () => set_count(0) }}>Reset</button>
      </div>
      <p className='read-the-docs'>Click on the respective logos to learn more.</p>

      <div className='version-num'>{version}</div>
    </div>
  )
}
