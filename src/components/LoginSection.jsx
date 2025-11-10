import React, { useState } from 'react';
import './LoginSection.css';

const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    // Handle login logic here
    console.log('Login attempt:', { email, password });
    alert('Login functionality would be implemented here. Email: ' + email);
  };

  const handleForgotPassword = () => {
    alert('Password reset functionality would be implemented here.');
  };

  return (
    <section id="login-section-scr" className="login-section">
      <div className="login-section-content">
        <div className="info-card">
          <h2 className="info-card-title">
            Welcome to the Submission Interface for 6th Tranche
            FTT-FTC Projects of CSIR
          </h2>
          <div className="info-card-content">
            <p>
              - The portal can only be accessed from Labs' IP address (within the lab premises only).<br />
              - Username: Your NIC email<br />
              - Password: Csir@123 (Default) (please change the password on the first login for safety reasons)<br />
              - Please note that only single digit is to be entered in login captcha based on number shown and the place (marked in red).<br />
              - Please check the text in case it is copy-pasted in textboxes.<br />
              - Details of a proposal can be entered through "Add new proposal". After saving the form, it will appear in the list. There is a button "View" to open the form, from where it can be sent to PME and to next level.<br />
              - In case, any user needs to reset password, please send request to csir.helpeks@csir.res.in<br />
              - In case of any help regarding portal functionality, helpdesk may be contacted at 011-24307999 (during office hours).
            </p>
          </div>
        </div>
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="login-form-title">Login to your account</h2>
            <div className="form-fields">
              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="CSIR Email ID"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) {
                      setErrors({ ...errors, email: undefined });
                    }
                  }}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="form-field">
                <div className="form-label-row">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <button
                    type="button"
                    className="forgot-password-link"
                    onClick={handleForgotPassword}
                  >
                    Forgot？
                  </button>
                </div>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) {
                        setErrors({ ...errors, password: undefined });
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#98A2B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" stroke="#98A2B3" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </div>
                {errors.password && (
                  <span
                    className="error-message"
                    role="alert"
                    aria-live="assertive"
                  >
                    {errors.password}
                  </span>
                )}
              </div>
            </div>
            <button type="submit" className="login-button">
              Login With Parichay
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;

