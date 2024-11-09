import React, { useState, useEffect } from 'react';
import { useStateTogetherWithPerUserValues } from 'react-together';

// const test = {
//   a: 'aaaa',
//   b: 'bbbb',
//   c: 'ccccc'
// }

// function testtttt(test) {
//   const { a, b } = test.a.aa.aaa

//   console.log(a)
//   console.log(test.a)
// }

const CursorEllipse = () => {
  const [, setCursorPositions, cursorPositions] = useStateTogetherWithPerUserValues('cursor', {x: 0, y:0});

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update cursor position
      setCursorPositions({ x: e.clientX, y: e.clientY });
    };

    // Add event listener to track mouse movement
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [setCursorPositions]);

  return (
    <div>
      {/* Render an ellipse for each user in the `cursorPositions` object */}
        {Object.entries(cursorPositions).map(([userId, position]) => (
        <div
          key={userId}
          className="ellipse"
          style={{
            left: position.x,
            top: position.y,
            backgroundColor: userId === 'your-user-id' ? 'blue' : 'black', // Optional: Different color for local user
          }}
        />
      ))}
    </div>
  );
};

export default CursorEllipse;