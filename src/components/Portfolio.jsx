import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="projects">
          <div className="project">
            <img src="project1.jpg" alt="Project 1" />
            <h3>InsightTrack</h3>
            <p>A personal finance management app that helps users track their income and expenses. Built with React and Node.js, featuring a dynamic dashboard and comprehensive analytics.</p>
            <a href="https://yourprojectlink.com" className="btn">View Project</a>
          </div>
          <div className="project">
            <img src="project2.jpg" alt="Project 2" />
            <h3>Project Name</h3>
            <p>Brief description of the project.</p>
            <a href="https://yourprojectlink.com" className="btn">View Project</a>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
