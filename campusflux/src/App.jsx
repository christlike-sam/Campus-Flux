import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components
import "./css/Navigation.css"
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Newform from './components/Newform';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Howitworks from './components/Howitworks';
import Contact from './components/Contact';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <Router>
      <div >
        <Header />
        <div>
          <nav className={`nav ${navOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link to="/" onClick={handleNavLinkClick}>Home</Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={handleNavLinkClick}>Dashboard</Link>
              </li>
              <li>
                <Link to="/aboutus" onClick={handleNavLinkClick}>About Us</Link>
              </li>
              <li>
                <Link to="/newform" onClick={handleNavLinkClick}>Signup</Link>
              </li>
              <li>
                <Link to="/howitworks" onClick={handleNavLinkClick}>How it works</Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleNavLinkClick}>Contact Us</Link>
              </li>
            </ul>
            <a
              href="#!"
              className="icon"
              onClick={() => setNavOpen(!navOpen)}
            >
              &#9776;
            </a>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/newform" element={<Newform />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/howitworks" element={<Howitworks />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
        </div>
        <Footer/>
    </Router>
   
  );
  
}
