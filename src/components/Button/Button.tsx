import React from 'react';
import './Button.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string; // Make className optional
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
