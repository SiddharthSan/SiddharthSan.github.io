// src/components/About.js
import React, { useEffect, useState } from 'react';
import './About.css';
import profilePic from '../assets/images/Profile.png'; 

function About() {
    const [typingText, setTypingText] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const fullText = "Hello! I'm Siddharth Sandeep. Welcome to my Portfolio :)";
    const mobileText = "Hello! I'm Siddharth.";
    const typingSpeed = 100; // Speed in milliseconds per character
    const erasingSpeed = 50; // Speed in milliseconds per character
    const pauseDuration = 2000; // Pause duration in milliseconds

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let isMounted = true;
        let isTyping = true;
        let charIndex = 0;
        const textToType = isMobile ? mobileText : fullText;

        const animateText = () => {
            if (!isMounted) return;

            if (isTyping) {
                if (charIndex <= textToType.length) {
                    setTypingText(textToType.slice(0, charIndex));
                    charIndex++;
                    setTimeout(animateText, typingSpeed);
                } else {
                    isTyping = false;
                    setTimeout(animateText, pauseDuration);
                }
            } else {
                if (charIndex > 0) {
                    charIndex--;
                    setTypingText(textToType.slice(0, charIndex));
                    setTimeout(animateText, erasingSpeed);
                } else {
                    isTyping = true;
                    setTimeout(animateText, pauseDuration);
                }
            }
        };

        animateText();

        return () => {
            isMounted = false;
        };
    }, [isMobile]);

    return (
        <section id="about" className="about">
            <div className="about-content">
                <h2 className="about-heading">About Me</h2>
                <div className="typing-container">
                    <div className="typing-effect">{typingText}</div>
                </div>
                <img src={profilePic} alt="Siddharth Sandeep" className="profile-pic" />
                <p>
                    I'm Siddharth Sandeep, a passionate computer science student and developer with a keen interest in web development and software engineering. 
                    I have experience working with a range of technologies including <strong>&nbsp;Python,&nbsp;&nbsp;Java,&nbsp;&nbsp;C++,&nbsp;&nbsp;and many more.</strong>
                    &nbsp;My projects often focus on creating practical solutions and improving user experiences through clean and efficient code. 
                    I'm continuously learning and growing in the field, aiming to contribute meaningfully to the tech community.
                </p> 
            </div>
        </section>
    );
}

export default About;