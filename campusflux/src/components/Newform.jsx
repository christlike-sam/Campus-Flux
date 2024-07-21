import React, { useState, useEffect } from 'react';
import '../css/signup.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Newform = ({ formType }) => {
  const [isSignUpActive, setIsSignUpActive] = useState(formType === 'signup');

  useEffect(() => {
    setIsSignUpActive(formType === 'signup');
  }, [formType]);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <div className={`container ${isSignUpActive ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <SignInForm />
          <SignUpForm />
        </div>
      </div>
      <div className="panels-container">
        <Panel 
          type="left" 
          title="New here?" 
          description="It's your time to make money! Click the button below to create an account. Fill in the referrer code if someone referred you or use the default referal code A001" 
          buttonText="Sign Up" 
          imgSrc="./img/log.svg" 
          buttonId="sign-up-btn" 
          onClick={handleSignUpClick}
        />
        <Panel 
          type="right" 
          title="One of us?" 
          description="Welcome back and earn more! Click the button below if you already have an account with us to Sign in to your account" 
          buttonText="Sign In" 
          imgSrc="./img/register.svg" 
          buttonId="sign-in-btn" 
          onClick={handleSignInClick}
        />
      </div>
    </div>
  );
};

const SignInForm = () => (
  <form action="" className="sign-in-form">
    <h2 className="title">Sign In</h2>
    <div className="input-field">
      <i className="fas fa-user"></i>
      <input type="text" placeholder="Username" />
    </div>
    <div className="input-field">
      <i className="fas fa-lock"></i>
      <input type="password" placeholder="Password" />
    </div>
    <input type="submit" value="Login" className="btn solid" />
    <p className="social-text">Or Sign in with social platforms</p>
    <div className="social-media">
      <SocialIcon platform="facebook-f" />
      <SocialIcon platform="twitter" />
      <SocialIcon platform="google" />
      <SocialIcon platform="linkedin-in" />
    </div>
  </form>
);

const SignUpForm = () => (
  <form action="" className="sign-up-form">
    <h2 className="title">Sign Up</h2>
    <div className="input-field">
      <i className="fas fa-id-card"></i>
      <input type="text" placeholder="Referer Code" />
    </div>
    <div className="input-field">
      <i className="fas fa-user"></i>
      <input type="text" placeholder="Username" />
    </div>
    <div className="input-field">
      <i className="fas fa-envelope"></i>
      <input type="email" placeholder="Email" />
    </div>
    <div className="input-field">
      <i className="fas fa-lock"></i>
      <input type="password" placeholder="Password" />
    </div>
    <input type="submit" value="Sign Up" className="btn solid" />
    <p className="social-text">Or Sign up with social platforms</p>
    <div className="social-media">
      <SocialIcon platform="facebook-f" />
      <SocialIcon platform="twitter" />
      <SocialIcon platform="google" />
      <SocialIcon platform="linkedin-in" />
    </div>
  </form>
);

const SocialIcon = ({ platform }) => (
  <a href="#" className="social-icon">
    <i className={`fab fa-${platform}`}></i>
  </a>
);

const Panel = ({ type, title, description, buttonText, imgSrc, buttonId, onClick }) => (
  <div className={`panel ${type}-panel`}>
    <div className="content">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn transparent" id={buttonId} onClick={onClick}>
        {buttonText}
      </button>
    </div>
    <img src={imgSrc} className="image" alt="" />
  </div>
);

export default Newform;
