import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import Newform from './components/Newform.jsx';
import About from './components/About.jsx';
import Howitworks from './components/Howitworks.jsx';
import Contact from './components/Contact.jsx';
import Dash from './dashboard/src/Dash.jsx'; // Ensure this path is correct
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Function to handle successful sign-in
    const handleSignIn = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    };

    // Function to handle sign-out
    const handleSignOut = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    // Check local storage on initial load
    React.useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated') === 'true';
        setIsAuthenticated(authStatus);
    }, []);

    return (
        <Router>
            <Header onSignOut={handleSignOut} /> {/* Pass handleSignOut to Header */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/newform"
                    element={<Newform formType="signup" onSignIn={handleSignIn} />}
                />
                <Route
                    path="/login"
                    element={<Newform formType="signin" onSignIn={handleSignIn} />}
                />
                <Route path="/aboutus" element={<About />} />
                <Route path="/howitworks" element={<Howitworks />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/dash"
                    element={isAuthenticated ? <Dash /> : <Navigate to="/login" />}
                />
            </Routes>
            <Footer />
 
        </Router>
    );
}
