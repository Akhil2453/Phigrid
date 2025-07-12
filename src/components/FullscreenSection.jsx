import React from 'react';

const FullscreenSection = () => {
  return (
    <section className="fullscreen-section">
      <div className="flex-container">
        {/* Left Side - Educator Image */}
        <div className="half">
          <img src="./images/bg4.jpg" alt="Educator" />
        </div>

        {/* Right Side - Content */}
        <div className="half text-content">
          <h1>Empowering Educators</h1>
          <p>
            At PhiGrid Elite EdTech, we’re committed to empowering educators and
            inspiring students through innovative educational technology
            solutions.
          </p>
          <a href="/about" className="btn-secondary">Explore Now</a>
        </div>
      </div>
    </section>
  );
};

export default FullscreenSection;
