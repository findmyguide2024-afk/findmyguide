import React from 'react';

const ContourBackground = () => {
  return (
    <div className="absolute inset-0 opacity-[0.08]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circular-contours" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
            {/* Central concentric circles */}
            <circle cx="200" cy="200" r="40" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="200" cy="200" r="65" stroke="white" strokeWidth="1.2" fill="none" />
            <circle cx="200" cy="200" r="90" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="115" stroke="white" strokeWidth="0.8" fill="none" />
            <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="0.7" fill="none" />
            <circle cx="200" cy="200" r="165" stroke="white" strokeWidth="0.6" fill="none" />
            
            {/* Corner circles for seamless pattern */}
            <circle cx="0" cy="0" r="100" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="0" cy="0" r="140" stroke="white" strokeWidth="0.7" fill="none" />
            <circle cx="400" cy="0" r="100" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="400" cy="400" r="100" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="0" cy="400" r="100" stroke="white" strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circular-contours)" />
      </svg>
    </div>
  );
};

export default ContourBackground;
