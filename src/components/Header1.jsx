import React from 'react';
import './Header1.css';

const Header1 = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  // const formattedTime = currentDate.toLocaleTimeString('en-US', {
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   second: '2-digit',
  //   hour12: true,
  // });
  const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'short' });

  return (
    <div className="header1">
      <div className="header1-content">
        <a href="#main-content" className="skip-link">
          Skip to main content.
        </a>
        <div className="divider"></div>
        {/* <a href="#screen-reader" className="accessibility-link">
          Screen Reader Access
        </a> */}
        {/* <a href="#text-size" className="accessibility-link">
          Text Size
        </a>
        <div className="text-size-controls">
          <button className="text-size-btn" aria-label="Decrease text size">A-</button>
          <button className="text-size-btn" aria-label="Increase text size">A+</button>
        </div> */}
        <div className="date-time">
          {formattedDate} | {dayName}
        </div>
      </div>
    </div>
  );
};

export default Header1;

