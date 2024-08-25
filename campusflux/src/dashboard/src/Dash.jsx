import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/DashStyles.module.css';
import Dheader from './components/Dheader.jsx';
import Dmain from './components/Dmain.jsx';
import Dreferer from './components/Dreferer.jsx';
import Dwallet from './components/Dwallet.jsx';
import Profile from './components/Profile.jsx';
import Dtasks from './components/Dtasks.jsx';

function Dash() {
    const [currentView, setCurrentView] = useState('Dmain');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = () => {
            // Get user data from local storage
            const userEmail = localStorage.getItem('userEmail');
            if (userEmail) {
                setUser({
                    email: userEmail,
                    username: userEmail.split('@')[0], // Example username
                    profilePicture: 'path/to/default/profilepic.jpg',
                    address: '123 Nairobi St',
                    phoneNumber: '+254 701234567',
                    dateOfBirth: '1998-12-12',
                });
            } else {
                navigate('/login'); // Redirect to login if no user data
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleNavClick = (view) => {
        setCurrentView(view);
    };

    const updateUser = (updatedData) => {
        setUser((prevUser) => ({
            ...prevUser,
            ...updatedData,
        }));
    };

    const renderView = () => {
        switch (currentView) {
            case 'Dmain':
                return <Dmain />;
            case 'Dreferer':
                return <Dreferer />;
            case 'Dwallet':
                return <Dwallet />;
            case 'Profile':
                return <Profile user={user} updateUser={updateUser} />;
            case 'Dtasks':
                return <Dtasks />;
            default:
                return <Dmain />;
        }
    };

    if (!user) return <div>Loading...</div>; // Show loading indicator while fetching user data

    return (
        <div>
            <Dheader
                username={user.username}
                profilePicture={user.profilePicture}
                onNavClick={handleNavClick}
            />
            <div>
                {renderView()}
            </div>
        </div>
    );
}

export default Dash;
