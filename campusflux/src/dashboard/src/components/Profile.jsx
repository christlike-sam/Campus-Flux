import React, { useState } from 'react';
import { storage } from './firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import '../css/profile.css';

export default function Profile({ user, updateUser }) {
    const [username, setUsername] = useState(user.username || '');
    const [profilePicture, setProfilePicture] = useState(user.profilePicture || '');
    const [address, setAddress] = useState(user.address || '');
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '');
    const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth || '');
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleProfilePictureChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!user.id) {
                console.error('User ID is missing. Unable to upload profile picture.');
                return;
            }

            const timestamp = Date.now();
            const storageRef = ref(storage, `profilePictures/${user.id}-${timestamp}`);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress);
                },
                (error) => {
                    console.error('Error uploading profile picture:', error);
                },
                async () => {
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        setProfilePicture(downloadURL);
                        await updateUser({ ...user, profilePicture: downloadURL });
                    } catch (error) {
                        console.error('Error getting profile picture URL:', error);
                    }
                }
            );
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser({ ...user, username, address, phoneNumber, dateOfBirth });
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
                {uploadProgress > 0 && <p>Upload Progress: {Math.round(uploadProgress)}%</p>}
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
