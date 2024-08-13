import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './dashboard/src/components/AuthContext'; // Ensure this path is correct
import useAuth from './dashboard/src/components/useAuth'; // Import the useAuth hook
import Home from './components/Home.jsx';
import Newform from './components/Newform.jsx';
import About from './components/About.jsx';
import Howitworks from './components/Howitworks.jsx';
import Contact from './components/Contact.jsx';
import Dash from './dashboard/src/Dash.jsx'; // Ensure this path is correct
import Header from './components/Header.jsx';

const PrivateRoute = ({ element }) => {
    const { user } = useAuth(); // Use the useAuth hook to get user data

    return user ? element : <Navigate to="/login" />;
};

export default function App() {
    return (
        <Router>
            <AuthProvider>
                <Header /> {/* Ensure Header is included on all pages */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/newform" element={<Newform formType="signup" />} />
                    <Route path="/login" element={<Newform formType="signin" />} />
                    <Route path="/aboutus" element={<About />} />
                    <Route path="/howitworks" element={<Howitworks />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dash" element={<PrivateRoute element={<Dash />} />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}


