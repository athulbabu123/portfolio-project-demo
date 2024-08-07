import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <form action="mailto:your.email@example.com" method="post" enctype="text/plain">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
