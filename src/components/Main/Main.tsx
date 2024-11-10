// src/pages/MainPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Main.sass';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/feel');
  };

  return (
    <div className="main-page">
      <h1>Welcome to the Main Page</h1>
      <Button text="Next" onClick={handleNextClick} />
    </div>
  );
};

export default MainPage;
