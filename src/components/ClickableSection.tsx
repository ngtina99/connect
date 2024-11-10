// // src/components/ClickableSection.tsx
// import React, { useState } from 'react';
// import '../styles/ClickableSection.scss';

// const ClickableSection = () => {
//   const [icons, setIcons] = useState([]);

//   const handleClick = (e) => {
//     const section = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - section.left;
//     const y = e.clientY - section.top;

//     setIcons((prevIcons) => [
//       ...prevIcons,
//       { id: Date.now(), x, y }
//     ]);
//   };

//   return (
//     <div className="clickable-section" onClick={handleClick}>
//       {icons.map((icon) => (
//         <div
//           key={icon.id}
//           className="icon"
//           style={{ left: `${icon.x}px`, top: `${icon.y}px` }}
//         />
//       ))}
//     </div>
//   );
// };

// export default ClickableSection;

// src/components/ClickableWrapper.tsx
import React, { useState } from 'react';
import '../styles/ClickableWrapper.scss';

const ClickableWrapper = ({ children }) => {
  const [icons, setIcons] = useState([]);

  const handleClick = (e) => {
    const wrapper = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - wrapper.left;
    const y = e.clientY - wrapper.top;

    setIcons((prevIcons) => [
      ...prevIcons,
      { id: Date.now(), x, y }
    ]);
  };

  return (
    <div className="clickable-wrapper" onClick={handleClick}>
      {children}
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="icon"
          style={{ left: `${icon.x}px`, top: `${icon.y}px` }}
        />
      ))}
    </div>
  );
};

export default ClickableWrapper;
