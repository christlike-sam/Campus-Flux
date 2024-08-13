import React, { useState } from 'react';
import { app, analytics, storage } from './components/firebaseConfig.js';
import './css/DashStyles.module.css';
import Dheader from './components/Dheader.jsx';
import Dmain from './components/Dmain.jsx';
import Dreferer from './components/Dreferer.jsx';
import Dwallet from './components/Dwallet.jsx';
import Profile from './components/Profile.jsx';
import Dtasks from './components/Dtasks.jsx';

function Dash() {
    const [currentView, setCurrentView] = useState('Dmain');
    const [user, setUser] = useState({
        username: 'Christlike Sam',
        email: 'christlikesam@example.com', // Add email here
        profilePicture: 'path/to/default/profilepic.jpg',
        address: '123 Nairobi St',
        phoneNumber: '+254 701234567',
        dateOfBirth: '1998-12-12',
    });

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
