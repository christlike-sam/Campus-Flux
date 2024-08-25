import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/signup.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Newform = ({ formType, onSignIn }) => {
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
                    {isSignUpActive ? <SignUpForm onSignIn={onSignIn} /> : <SignInForm onSignIn={onSignIn} />}
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

const SignInForm = ({ onSignIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === storedEmail && password === storedPassword) {
            onSignIn(); // Notify App of successful sign-in
            navigate('/dash');  // Redirect to dashboard
        } else {
            alert('Invalid credentials');
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

const SignUpForm = ({ onSignIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        onSignIn(); // Notify App of successful sign-up and sign-in
        alert('Signup successful! Redirecting to login page...');
        navigate('/login');  // Redirect to login
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
