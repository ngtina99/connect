import React, { useState, useEffect } from 'react';

const CursorEllipse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update cursor position
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener to track mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="ellipse"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
};

export default CursorEllipse;