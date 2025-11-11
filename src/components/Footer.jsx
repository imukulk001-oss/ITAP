import React from "react";
import "./Footer.css";
import {
  XIcon,
  YouTubeIcon,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
} from "./icons/SocialIcons";

const csirLogo = "/images/csir-logo.png";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "X (Twitter)",
      icon: <XIcon />,
      url: "https://x.com/CSIR_IND",
    },
    {
      name: "YouTube",
      icon: <YouTubeIcon />,
      url: "https://www.youtube.com/@CSIRINDIA1942",
    },
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon />,
      url: "https://www.whatsapp.com/channel/0029VaINdbL5q08ecWc8zV1P",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      url: "https://www.instagram.com/csirindia/",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon />,
      url: "https://www.facebook.com/INDIA.CSIR",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo-section">
            <img src={csirLogo} alt="CSIR Logo" className="footer-logo" />
            <p className="footer-org-name">
              वैज्ञानिक तथा औद्योगिक अनुसंधान परिषद्
              <br />
              Council of Scientific & Industrial Research
              <br />
              (विज्ञान एवं प्रौद्योगिकी मंत्रालय, भारत)
              <br />
              Ministry of Science & Technology, Govt. of India
              <br />
              <br />
              Anusandhan Bhawan, 2 Rafi Ahmed Kidwai Marg,<br />
              New Delhi - 110001 <br />
              Phone reception: +91-11-23737889
            </p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <div className="footer-links-column">
              <a href="https://www.csir.res.in/en/website-policies" className="footer-link">
                Privacy Policy
              </a>
              <a href="https://www.csir.res.in/en/Disclaimer" className="footer-link">
                Disclaimer
              </a>
              <a href="https://www.csir.res.in/en/help" className="footer-link">
                Help
              </a>
              <a href="https://www.csir.res.in/en/Terms-and-Conditions" className="footer-link">
                Terms & Conditions
              </a>
              <a href="https://www.csir.res.in/en/website-policies" className="footer-link">
                Copyright Policy
              </a>
              <a href="https://www.csir.res.in/en/Contact-us" className="footer-link">
                Contact Us
              </a>
            </div>
          </div>
          <div className="footer-social">
            <p className="social-title">CSIR SOCIAL MEDIA</p>
            <div className="social-icons">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-icon-link"
                  aria-label={social.name}
                  title={social.name}
                >
                  <div className="social-icon">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
