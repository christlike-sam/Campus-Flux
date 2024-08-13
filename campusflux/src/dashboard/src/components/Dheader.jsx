// Dheader.jsx
import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import styles from '../css/DashHeader.module.css';
import logo from './cflogo.png';

export default function Dheader({ onNavClick }) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const auth = getAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error.message);
        }
    };

    return (
        <div className={styles.dheader}>
            <div className={styles['nav-toggle']} onClick={() => { /* Toggle menu */ }}>
                ☰
            </div>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles['brand-name']}>
                <h2>CAMPUS FLUX</h2>
            </div>
            <div className={`${styles.nav} ${/* Menu open state */ ''}`}>
                <ul>
                    <li><a href="#home" onClick={() => onNavClick('Dmain')}>Home</a></li>
                    <li><a href="#refer" onClick={() => onNavClick('Dreferer')}>Refer</a></li>
                    <li><a href="#wallet" onClick={() => onNavClick('Dwallet')}>Wallet</a></li>
                    <li><a href="#profile" onClick={() => onNavClick('Profile')}>Settings</a></li>
                    <li><a href="#tasks" onClick={() => onNavClick('Dtasks')}>Tasks</a></li>
                </ul>
            </div>
            <div className={styles.profile} onClick={() => setDropdownOpen(!dropdownOpen)}>
                <div className={styles['profile-info']}>
                    <img
                        src={user?.profilePicture || '/path_to_default_image_here.png'}
                        alt="Profile"
                        className={styles['profile-pic']}
                    />
                    <span className={styles.username}>{user?.username}</span>
                </div>
                {dropdownOpen && (
                    <div className={styles['dropdown-menu']}>
                        <ul>
                            <li><a href="#settings" onClick={() => onNavClick('Profile')}>Settings</a></li>
                            <li><a href="#" onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
