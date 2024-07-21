import React, { useState } from "react";
import "../css/Animation.css";
import a1 from "./a1.png";

export default function Animation() {
    const handleScrollToSection = () => {
        const targetElement = document.getElementById('home');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="animation">
            <span>
                Earn Money Easily and Quickly Using Your Mobile Phone Or Laptop Now!!!
                <input 
                    type="button" 
                    value="Start Free Plan" 
                    className="btn" 
                    onClick={handleScrollToSection} 
                />
            </span>
            <img src={a1} alt="Slide 1" />
        </div>
    );
}
