// src/components/Experience.js
import React from 'react';
import './Experience.css';

function Experience() {
    return (
        <section id="experience" className="experience">
            <h2>Experience</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-icon"></div>
                    <div className="timeline-content narrow">
                        <h3><strong>Project Human City</strong></h3>
                        <h4>Full Stack Developer Intern</h4>
                        <span>Jun 2024 - Aug 2024</span>
                        <p>
                            Created widgets for the website using HTML, CSS, JavaScript and Java.<br /><br />
                            <strong>Key responsibilities:</strong><br />
                            Designed Frontend using JavaScript, HTML, CSS.<br />
                            Implemented Drag and Drop feature.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon"></div>
                    <div className="timeline-content">
                        <h3><strong>Acmegrade</strong></h3>
                        <h4>Web Development Intern</h4>
                        <span>July 2023 - August 2023</span>
                        <p>
                            Worked on the development of an e-commerce website.<br /><br />
                            <strong>Key responsibilities:</strong><br />
                            Designed Frontend using JavaScript, HTML, CSS.<br />
                            Worked on Database Management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
