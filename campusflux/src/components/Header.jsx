import React from 'react';
import styles from '../css/AppNavigation.module.css'; // Ensure the CSS path is correct
import logo from '../components/cflogowhite.png';

const Header = () => {
    return (
        <header>
        <div>
            <div className={styles.header}>
                <img src={logo} alt="Campus Flux Logo" />
                <h1>Campus Flux</h1>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/howitworks">How it works</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/newform">Signup</a></li>
                </ul>
                <a
                    href="#!"
                    className={styles.icon}
                    onClick={() => setNavOpen(!navOpen)}
                >
                    &#9776;
                </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
