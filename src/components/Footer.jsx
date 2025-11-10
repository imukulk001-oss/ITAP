import React from 'react';
import './Footer.css';

const Footer = () => {
  const footerLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Disclaimer', href: '#disclaimer' },
    { label: 'Help', href: '#help' },
    { label: 'Terms & Conditions', href: '#terms' },
    { label: 'Accessibility Statement', href: '#accessibility' },
    { label: 'Copyright Policy', href: '#copyright' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (href, label) => {
    console.log(`Navigating to ${label}: ${href}`);
    // In a real app, this would navigate to the appropriate page
    alert(`This would navigate to ${label}.`);
  };

  return (
    <>
      <footer className="footer-main">
        <div className="footer-content">
          <div className="footer-logo-section">
            <img 
              src="/images/csir-logo.png" 
              alt="CSIR Logo" 
              className="footer-logo"
            />
            <div className="footer-org-name">
              <div className="footer-org-name-hindi">
                वैज्ञानिक तथा औद्योगिक अनुसंधान परिषद्
              </div>
              <div className="footer-org-name-english">
                Council of Scientific & Industrial Research
              </div>
              <div className="footer-org-name-ministry">
                (विज्ञान एवं प्रौद्योगिकी मंत्रालय, भारत )
                <br />
                Ministry of Science & Technology, Govt. of India
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-column">
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  className="footer-link"
                  onClick={() => handleLinkClick(link.href, link.label)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p className="footer-copyright">
          Content Owned, Maintained and Updated by CSIR - Council of Scientific and Industrial Research.
        </p>
      </div>
    </>
  );
};

export default Footer;

