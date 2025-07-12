import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="overlay"></div>
      <div className="hero-text">
        <h1>Empowering Education with Innovation</h1>
        <p>
          Delivering seamless learning experiences through cutting-edge
          technology.
        </p>
        <a href="#contact" className="cta-button">Get Started Today</a>
      </div>
    </section>
  );
};

export default Hero;