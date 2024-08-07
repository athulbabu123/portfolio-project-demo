import React from 'react';
import './App.css';
import Hero from './components/Hero.jsx'; // Update the extension
import About from './components/About.jsx'; // Update the extension
import Portfolio from './components/Portfolio.jsx'; // Update the extension
import Services from './components/Services.jsx'; // Update the extension
import Testimonials from './components/Testimonials.jsx'; // Update the extension
import Contact from './components/Contact.jsx'; // Update the extension
import Footer from './components/Footer.jsx'; // Update the extension
import ScrollToTopButton from './components/ScrollToTopButton.jsx'; // Import the button


function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTopButton /> {/* Include the button */}
    </div>
  );
}

export default App;
