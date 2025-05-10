import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Me</h1>
        <p>
          I’m a passionate developer with a strong interest in cloud computing, full-stack development,
          and modern web technologies. I love building intuitive, responsive web applications and solving real-world problems through code.
        </p>
        <p>
          This portfolio showcases some of the projects I’ve worked on. Each one reflects my enthusiasm
          for learning and continuous improvement.
        </p>
        <div className="resume-button">
          <button className="resume-btn">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
