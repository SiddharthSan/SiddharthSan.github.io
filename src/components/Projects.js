// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-box">
                <h2><strong>Attendify</strong></h2>
                <p>
                    <strong>Attendify</strong> is an attendance management system designed to streamline the process of marking and tracking attendance for educational institutions. It features separate interfaces for students and teachers, allowing for efficient attendance recording and reporting.
                </p>
                <ul>
                    <li><strong>User Authentication:</strong> Secure login and registration system for students and teachers.</li>
                    <li><strong>Student Dashboard:</strong> Students can view their attendance records and receive notifications.</li>
                    <li><strong>Teacher Dashboard:</strong> Teachers can mark attendance and generate attendance reports.</li>
                    <li><strong>Real-time Updates:</strong> Attendance data is updated in real-time and accessible through the dashboard.</li>
                </ul>
                <p><strong>Technologies Used:</strong> Java (GUIs), SQL (Database management)</p>
                <a href="https://github.com/SiddharthSan/Attendify" target="_blank" rel="noopener noreferrer" className="github-link">View on GitHub</a>
            </div>
            <div className="project-box">
                <h2><strong>Connect Four Game</strong></h2>
                <p>
                    <strong>Connect Four</strong> is a classic two-player game where the objective is to connect four of your colored discs in a row, either vertically, horizontally, or diagonally, before your opponent does. This project implements the game using HTML, CSS, and JavaScript.
                </p>
                <ul>
                    <li><strong>Interactive gameplay:</strong> Players drop discs into columns and try to connect four in a row.</li>
                    <li><strong>Responsive Design:</strong> The game adjusts to different screen sizes for a seamless experience.</li>
                    <li><strong>User-Friendly Interface:</strong> Simple and intuitive interface for easy gameplay.</li>
                </ul>
                <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript</p>
                <a href="https://github.com/SiddharthSan/Connect-Four-Game" target="_blank" rel="noopener noreferrer" className="github-link">View on GitHub</a>
            </div>
        </section>
    );
}

export default Projects;
