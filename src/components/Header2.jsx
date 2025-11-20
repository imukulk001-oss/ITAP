import React from "react";
import "./Header2.css";
const csirLogo = "/images/csir-logo.png";

const Header2 = () => {
  const handleLogoClick = () => {
    window.location.href = "https://www.csir.res.in";
  };
/*
  const handleLoginClick = () => {
    const loginSection = document.getElementById("login-section-scr");
    if (loginSection) {
      loginSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
*/
  // Redirect user directly to the Parichay portal
  const handleParichayRedirect = () => {
    window.open("https://parichay.nic.in/", "_blank", "noopener,noreferrer");
  };

  return (
    <header className="header2">
      <div className="header2-content">
        <div
          className="header2-left clickable-logo-section"
          onClick={handleLogoClick}
        >
          <img src={csirLogo} alt="CSIR Logo" className="csir-logo" />
          <div className="header2-text">
            <p className="org-name">
              वैज्ञानिक तथा औद्योगिक अनुसंधान परिषद्
              <br />
              Council of Scientific & Industrial Research
              <br />
              (विज्ञान एवं प्रौद्योगिकी मंत्रालय, भारत)
              <br />
              Ministry of Science & Technology, Govt. of India
            </p>
          </div>
        </div>
        <nav className="main-nav">
          {/* Updated: This button now triggers Parichay login */}
          <button className="hero-button" onClick={handleParichayRedirect}>
            Login with Parichay
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4H9M9 4L6 1M9 4L6 7"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header2;
