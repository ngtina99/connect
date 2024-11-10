import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMood } from '@hooks/Mood/MoodContext';
import './FeelPage.scss';
import sadFace from '../../assets/images/sad.png';
import neutralFace from '../../assets/images/neutral.png';
import happyFace from '../../assets/images/happy.png';
import Button from '../../components/Button/Button';

const FeelPage: React.FC = () => {
  const { mood, setMood } = useMood();
  const navigate = useNavigate();

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMood(Number(event.target.value));
  };

  const handleNextClick = () => {
    navigate('/map');
  };

  const getMoodImage = () => {
    if (mood < 33) {
      return sadFace;
    } else if (mood < 67) {
      return neutralFace;
    } else {
      return happyFace;
    }
  };

  const getBackgroundClass = () => {
    if (mood < 33) {
      return 'mood-background sad';
    } else if (mood < 67) {
      return 'mood-background neutral';
    } else {
      return 'mood-background happy';
    }
  };

  return (
    <div className="feel-page">
      <div className={getBackgroundClass()}></div>
      <h1>how do you feel today?</h1>
      <img src={getMoodImage()} alt="Mood" className="mood-image" />
      <label htmlFor="mood-slider" className="visually-hidden">Mood slider</label>
      <div className="mood-slider-container">
        <input
          type="range"
          min="0"
          max="100"
          value={mood}
          onChange={handleSliderChange}
          className="mood-slider"
          id="mood-slider"
          title="Mood slider"
        />
      </div>
      <div className="mood-labels">
        <span>Bad</span>
        <span></span>
        <span>Good</span>
      </div>
      <Button text="Next" onClick={handleNextClick} />
    </div>
  );
};

export default FeelPage;
