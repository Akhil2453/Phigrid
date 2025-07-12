import React from 'react';

const ContentSection = () => {
  return (
    <section className="content-section">
      {/* First Row */}
      <div className="grid-two">
        <div className="box">
          <p className="section-subtitle">Our Difference</p>
          <h2 className="section-title">Pioneering the Future of Education</h2>
          <p className="section-paragraph">
            At PhiGrid Elite EdTech, we believe that the future of education
            lies in technology-driven solutions that empower learners.
          </p>
          <a href="#services" className="btn">Explore Solutions</a>
        </div>
        <div className="image-container">
          <img src="/images/bg2.jpg" alt="Educators" className="responsive-image" />
        </div>
      </div>
      
      {/* Second Row */}
      <div className="grid-two mt-6">
        <div className="image-container">
          <img src="/images/bg3.jpg" alt="Collaboration" className="responsive-image" />
        </div>
        <div className="box">
          <h2 className="section-title">
            Powering the Next Generation of Learners
          </h2>
          <p className="section-paragraph">
            Our mission is to provide accessible, personalized education that
            equips students with the knowledge and skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;