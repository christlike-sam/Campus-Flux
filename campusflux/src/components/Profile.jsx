// Profile.jsx
import React, { useState } from 'react';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useContext } from 'react';
import AuthContext from './AuthContext';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [username, setUsername] = useState(user?.username || '');
    const [address, setAddress] = useState(user?.address || '');
    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
    const [profilePic, setProfilePic] = useState(null);
    const db = getFirestore();
    const storage = getStorage();

    const handleUpdate = async (e) => {
        e.preventDefault();

        // Update Firestore
        const userDoc = doc(db, 'users', user.id);
        await updateDoc(userDoc, {
            username,
            address,
            phoneNumber,
        });

        // Upload profile picture if selected
        if (profilePic) {
            const profilePicRef = ref(storage, `profile_pictures/${user.id}`);
            await uploadBytes(profilePicRef, profilePic);
            const photoURL = await getDownloadURL(profilePicRef);
            await updateDoc(userDoc, { profilePicture: photoURL });
        }
    };

    return (
        <form onSubmit={handleUpdate}>
            <h2>Update Profile</h2>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Address</label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div>
                <label>Phone Number</label>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <div>
                <label>Profile Picture</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProfilePic(e.target.files[0])}
                />
            </div>
            <button type="submit">Update</button>
        </form>
    );
};

export default Profile;
