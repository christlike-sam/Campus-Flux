import React, { useState, useEffect } from 'react';
import '../css/profile.css';

export default function Profile({ user, updateUser }) {
    const [username, setUsername] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    // Fetch user data from local storage on component mount
    useEffect(() => {
        const fetchUserData = () => {
            if (!user || !user.uid) {
                console.error('User ID is missing. Unable to fetch profile data.');
                return;
            }

            const storedUserData = JSON.parse(localStorage.getItem(`user_${user.uid}`));
            if (storedUserData) {
                setUsername(storedUserData.username || '');
                setProfilePicture(storedUserData.profilePicture || '');
                setAddress(storedUserData.address || '');
                setPhoneNumber(storedUserData.phoneNumber || '');
                setDateOfBirth(storedUserData.dateOfBirth || '');
            } else {
                console.log('No user data found in local storage.');
            }
        };

        fetchUserData();
    }, [user]);

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Simulate a file upload and use a placeholder image URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            ...user,
            username,
            address,
            phoneNumber,
            dateOfBirth,
            profilePicture,
        };
        localStorage.setItem(`user_${user.uid}`, JSON.stringify(updatedUser));
        updateUser(updatedUser);
    };

    return (
        <div className="profile-page">
            <div className="profile-container">
                <img
                    src={profilePicture || '/path_to_default_image_here.png'}
                    alt="Profile"
                    className="profile-pic-circle"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="save-button">Update</button>
                </form>
            </div>
        </div>
    );
}
