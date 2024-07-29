import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

// Import your components
import '../css/dheader.css'
import Dtasks from '../components/Dtasks';
import Dreferer from '../components/Dreferer';
import Dreferrals from '../components/Dreferrals';
import Dsettings from '../components/Dsettings';
import Dwallet from '../components/Dwallet';

export default function Dheader() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <Router>
      <div className='header' >
        <div>
          <nav className={`nav ${navOpen ? 'open' : ''}`}>
            <ul>
              {/* <li>
                <Link to="/" onClick={handleNavLinkClick}>Dmain</Link>
              </li> */}
              <li>
                <Link to="/dtasks" onClick={handleNavLinkClick}>Tasks</Link>
              </li>
              <li>
                <Link to="/dreferer" onClick={handleNavLinkClick}>Refer</Link>
              </li>
              <li>
                <Link to="/dreferrals" onClick={handleNavLinkClick}>Referrals</Link>
              </li>
              <li>
                <Link to="/dsettings" onClick={handleNavLinkClick}>Settings</Link>
              </li>
              <li>
                <Link to="/dwallet" onClick={handleNavLinkClick}>Dwallet</Link>
              </li>
              
            </ul>
          </nav>

          <Routes>
            {/* <Route path="/" element={<Dmain />} /> */}
            <Route path="/dreferer" element={<Dreferer />} />
            <Route path="/dreferrals" element={<Dreferrals />} />
            <Route path="/dsettings" element={<Dsettings />} />
            <Route path="/dwallet" element={<Dwallet />} />
            <Route path="/dtasks" element={<Dtasks />} />
          </Routes>
          </div>
        </div>
    </Router>
   
  );
  
}
