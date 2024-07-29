import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components
import './css/Navigation.css';
import Home from './components/Home.jsx';
// import Dashboard from './components/Dashboard.jsx';
import Newform from './components/Newform.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Howitworks from './components/Howitworks.jsx';
import Contact from './components/Contact.jsx';
// import User from './cfdash/src/User.jsx'

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <Router>
      <div>
        <Header />
        <div>
          <nav className={`nav ${navOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link to="/" onClick={handleNavLinkClick}>Home</Link>
              </li>
              <li>
                <Link to="/aboutus" onClick={handleNavLinkClick}>About Us</Link>
              </li>
              <li>
                <Link to="/howitworks" onClick={handleNavLinkClick}>How it works</Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleNavLinkClick}>Contact Us</Link>
              </li>
              <li>
                <Link to="/newform" onClick={handleNavLinkClick}>Signup</Link>
              </li>
              {/* <li>
                <Link to="/user" onClick={handleNavLinkClick}>Dashboard</Link>
              </li> */}
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
            {/* <Route path="/user" element={<User />} /> */}
            <Route path="/newform" element={<Newform formType="signup" />} />
            <Route path="/login" element={<Newform formType="signin" />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/howitworks" element={<Howitworks />} />
            <Route path="/contact" element={<Contact />} />
          
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
