import { useState } from 'react';
import "../css/Header.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className='nav'>
        <ul className={isOpen ? 'open' : ''}>
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <div className="icon" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
        </ul>
      </div>
    </nav>
  );
}
