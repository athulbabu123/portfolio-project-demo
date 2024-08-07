import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© 2024 [Your Name]</p>
        <ul className="social-links">
          <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          {/* Add more social links as needed */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
