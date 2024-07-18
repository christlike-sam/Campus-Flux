import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "../css/Navigation.css"
import Home from './Home';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Header from './Header';
import Footer from './Footer';
import About from './About';
export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Router>
      <div>
        <div>
          <nav className='nav'>
            <ul className={navOpen ? 'open' : ''}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
                <Link to="/signup">Signup</Link>
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
            <Route path="/signup" element={<Signup />} />
            <Route path="/aboutus" element={<About />} />
          </Routes>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}
