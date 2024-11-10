// src/pages/FeelPage.tsx
import React, { useState } from 'react'
import './FeelPage.scss'
import { useNavigate } from 'react-router-dom'
import sadFace from '../../assets/images/sad.png'
import neutralFace from '../../assets/images/neutral.png'
import happyFace from '../../assets/images/happy.png'
import Button from '../../components/Button/Button'
import { useMood } from '@hooks/Mood/MoodContext'

const FeelPage: React.FC = () => {
  const { mood, setMood } = useMood()
  const navigate = useNavigate()

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMood(Number(event.target.value))
  }

  const handleNextClick = () => {
    navigate('/map')
  }

  const getMoodImage = () => {
    if (mood < 33) {
      return sadFace
    } else if (mood < 67) {
      return neutralFace
    } else {
      return happyFace
    }
  }

  return (
    <div className='feel-page'>
      {' '}
      <h1>How do you feel today?</h1> <img src={getMoodImage()} alt='Mood' className='mood-image' />{' '}
      <label htmlFor='mood-slider' className='visually-hidden'>
        Mood slider
      </label>{' '}
      <input
        type='range'
        min='0'
        max='100'
        value={mood}
        onChange={handleSliderChange}
        className='mood-slider'
        id='mood-slider'
        title='Mood slider'
      />{' '}
      <div className='mood-labels'>
        {' '}
        <span>Bad</span> <span>Neutral</span> <span>Good</span>{' '}
      </div>{' '}
      <Button text='Next' onClick={handleNextClick} />{' '}
    </div>
  )
}

export default FeelPage
