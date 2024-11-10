import React from 'react';

const RippleCircle: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-40 h-40 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full">
        <div className="ripple absolute inset-0 w-full h-full bg-white opacity-25 rounded-full pointer-events-none"></div>
      </div>
    </div>
  );
};

export default RippleCircle;
