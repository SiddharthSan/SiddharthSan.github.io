// src/components/TypingEffect.js
import React, { useEffect, useState } from 'react';
import './TypingEffect.css';

function TypingEffect() {
    const [text, setText] = useState('');
    const message = "Hello! I'm Siddharth Sandeep.Welcome to my Portfolio :)";

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            setText((prev) => prev + message[index]);
            index += 1;
            if (index > message.length) {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setText('');
                    setInterval(() => {
                        setText((prev) => prev + message[index]);
                        index += 1;
                        if (index > message.length) {
                            index = 0;
                            setText('');
                        }
                    }, 100);
                }, 1000);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    return <div className="typing-effect">{text}</div>;
}

export default TypingEffect;
