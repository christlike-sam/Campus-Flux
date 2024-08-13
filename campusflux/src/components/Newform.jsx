import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../dashboard/src/components/firebaseConfig';  // Adjust the path as needed
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Dash from '../dashboard/src/Dash.jsx';  // Adjust the path as needed
import '../css/signup.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Newform = ({ formType }) => {
    const [isSignUpActive, setIsSignUpActive] = useState(formType === 'signup');
    const navigate = useNavigate();

    useEffect(() => {
        setIsSignUpActive(formType === 'signup');
    }, [formType]);

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };

    return (
        <div className={`container ${isSignUpActive ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <SignInForm />
                    <SignUpForm />
                </div>
            </div>
            <div className="panels-container">
                <Panel
                    type="left"
                    title="New here?"
                    description="It's your time to make money! Click the button below to create an account. Fill in the referrer code if someone referred you or use the default referral code A001"
                    buttonText="Sign Up"
                    imgSrc="./img/log.svg"
                    buttonId="sign-up-btn"
                    onClick={handleSignUpClick}
                />
                <Panel
                    type="right"
                    title="One of us?"
                    description="Welcome back and earn more! Click the button below if you already have an account with us to Sign in to your account"
                    buttonText="Sign In"
                    imgSrc="./img/register.svg"
                    buttonId="sign-in-btn"
                    onClick={handleSignInClick}
                />
            </div>
        </div>
    );
};

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Signin successful!');
            console.log('Signin successful')
            navigate('/Dash');  // Adjust the route as needed
        } catch (error) {
            console.error('Error signing in:', error.message);
            alert('Error signing in: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <input type="submit" className="btn solid" value="Sign In" />
        </form>
    );
};

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('Signup successful! Redirecting to login page...');
            navigate('/login');  // Adjust the route as needed
        } catch (error) {
            console.error('Error signing up:', error.message);
            alert('Error signing up: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <input type="submit" className="btn solid" value="Sign Up" />
        </form>
    );
};

const Panel = ({ type, title, description, buttonText, imgSrc, buttonId, onClick }) => (
    <div className={`panel ${type}-panel`}>
        <div className="content">
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="btn transparent" id={buttonId} onClick={onClick}>
                {buttonText}
            </button>
        </div>
        <img src={imgSrc} className="image" alt="" />
    </div>
);

export default Newform;
