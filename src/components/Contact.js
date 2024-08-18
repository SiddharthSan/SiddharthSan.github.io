  // src/components/Contact.js
  import React from 'react';
  import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons
  import './Contact.css';

  function Contact() {
    return (
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <div className="card">
          <p>Email: <a href="mailto:siddharth.sandeep13@gmail.com"><FaEnvelope /> siddharth.sandeep13@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/siddharth-sandeep-a4a85122a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> Siddharth</a></p>
          <p>GitHub: <a href="https://github.com/SiddharthSan" target="_blank" rel="noopener noreferrer"><FaGithub /> SiddharthSan</a></p>
          <p>Phone: +91 97661 76850</p>
        </div>
      </section>
    );
  }

  export default Contact;
