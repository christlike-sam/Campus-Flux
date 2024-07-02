import React, { useState } from 'react';
import '../css/App.css';
import Signup from './Signup';

export default function Form() {
  const [showSignup, setShowSignup] = useState(false);

  const handleButtonClick = () => {
    setShowSignup(true);
  };

  return (
    <div className={`container ${showSignup ? 'sign-up-mode' : ''}`}>
      {!showSignup ? (
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={(e) => e.preventDefault()}>
              <button type="button" className="btn" onClick={handleButtonClick}>Login</button>
              <button type="button" className="btn" onClick={handleButtonClick}>Join</button>
            </form>
          </div>
        </div>
      ) : (
        <Signup />
      )}
    </div>
  );
}
