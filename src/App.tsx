import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '@components/Slidebar/Sidebar';
import MainPage from '@pages/Main/Main';
import FeelPage from './pages/LandingPage/FeelPage';
import MapboxExample from '@pages/Map/MapboxExample';
import CursorEllipse from './components/CursorEllipse';
import JoinSessionButton from './components/JoinSessionButton.tsx';
import RippleCircle from '@components/RipleCircle/RipleCircle';
import './gobalStyle.css'
import SessionComponent from './components/SessionComponent'; // Adjust the path based on where you put it

export default function App() {
  return (
    <div className="app">
      <div className="flex">
        {/* Centered Content Area */}
        <div className="ml-[200px] flex justify-center items-center p-5 w-full min-h-screen">
          <div className="w-full">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/feel" element={<FeelPage />} />
              <Route path="/map" element={<MapboxExample />} />
              {/* <Route path="/ripple" element={<RippleCircle />} /> */}
              
            </Routes>
			</div>
			<SessionComponent />
{/* JoinSessionButton (appears on all pages) */}
{/* <JoinSessionButton /> */}
</div>

{/* CursorEllipse and Version Number */}
        <CursorEllipse />
      </div>
    </div>
  );
}
