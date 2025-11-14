import React from 'react';
import './Header2.css';

const Header2 = () => {
  // Redirect user directly to the Parichay portal
  const handleParichayRedirect = () => {
    window.open("https://parichay.nic.in/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="header2">
      <div className="header2-content">
        <div className="logo-section">
          <img 
            src="/images/csir-logo.png" 
            alt="CSIR Logo" 
            className="csir-logo"
          />
          <div className="org-name">
            <div className="org-name-hindi">
              वैज्ञानिक तथा औद्योगिक अनुसंधान परिषद्
            </div>
            <div className="org-name-english">
              Council of Scientific & Industrial Research
            </div>
            <div className="org-name-ministry">
              (विज्ञान एवं प्रौद्योगिकी मंत्रालय, भारत)
              <br /> 
              Ministry of Science & Technology, Govt. of India
            </div>
          </div>
        </div>

        <nav className="main-nav">
          {/* Updated: This button now triggers Parichay login */}
          <button className="hero-button" onClick={handleParichayRedirect}>
            Login with Parichay
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4H9M9 4L6 1M9 4L6 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </nav>
      </div>

      <div className="nav-indicator"></div>
    </div>
  );
};

export default Header2;