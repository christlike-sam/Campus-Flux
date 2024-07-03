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
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          <li className="icon" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}
