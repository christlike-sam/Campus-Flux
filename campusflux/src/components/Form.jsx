import React, { useState } from 'react';
import '../css/App.css';
import Newform from './Newform';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Form() {
  const [showNewform, setShowNewform] = useState(false);
  const [formType, setFormType] = useState('');

  const handleLoginClick = () => {
    setFormType('login');
    setShowNewform(true);
  };

  const handleJoinClick = () => {
    setFormType('signup');
    setShowNewform(true);
  };

  const handleTestClick = () => {
    setFormType('test');
    setShowNewform(true);
  };

  return (
    <div>
      {showNewform ? (
        <Newform formType={formType} />
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='btnlayout'>
          <button type="button" className="button" onClick={handleLoginClick}>Login</button>
          <button type="button" className="button" onClick={handleJoinClick}>Join</button>
          </div>
        </form>
      )}
    </div>
  );
}
