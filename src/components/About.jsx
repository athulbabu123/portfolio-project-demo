import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <img src="your-picture.jpg" alt="Your Picture" className="profile-pic" />
          <p>Hi, I’m [Your Name], a passionate software developer with a knack for creating intuitive and effective applications. With experience in React, Node.js, and a variety of tools, I love turning ideas into functional and user-friendly solutions.</p>
          <h3>Skills:</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>UX/UI Design</li>
            <li>Data Analysis</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
