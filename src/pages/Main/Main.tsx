import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Main.scss';
import myImage from '../../assets/images/Vector.png';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/feel');
  };

  return (
    <div className="main-page">
      <h1 className="main-title">connect</h1>
      <h2 className="main-subtitle">Share your emotion with your friends.</h2>
      <div className="image-container">
        <img src={myImage} alt="My Image" className="main-image animate-ripple" />
      </div>
      <Button text="Get Started" onClick={handleNextClick} />
    </div>
  );
};

export default MainPage;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from '../../components/Button/Button';
// import './Main.scss';

// // Import the PNG image
// import myImage from '../../assets/images/Vector.png';

// const MainPage: React.FC = () => {
//   const navigate = useNavigate();

//   const handleNextClick = () => {
//     navigate('/feel');
//   };

//   return (
//     <div className="main-page">
//       <h1 className="main-title">Welcome to the Main Page</h1>
//       <h2 className="main-subtitle">Share your emotion with your friends.</h2>
      
//       {/* Display the PNG image */}
//       <div className="image-container">
//         <img src={myImage} alt="My Image" className="main-image" />
//       </div>

//       <Button text="Next" onClick={handleNextClick} />
//     </div>
//   );
// };

// export default MainPage;