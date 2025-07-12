import React from 'react';

const servicesList = [
  {
    icon: '📚',
    title: 'Content Development',
    description: 'High-quality course materials, online degree content, and self-learning materials.'
  },
  {
    icon: '🏢',
    title: 'Corporate Training',
    description: 'Custom learning solutions for MNCs and businesses.'
  },
  {
    icon: '🎥',
    title: 'Video Production',
    description: 'AI voice-over, SME-led recordings, and post-production editing.'
  },
  {
    icon: '📝',
    title: 'Instructional Design',
    description: 'Structured learning frameworks and interactive learning methodologies.'
  },
  {
    icon: '🖥️',
    title: 'LMS Management',
    description: 'Complete setup and management of learning management systems.'
  },
  {
    icon: '📡',
    title: 'Education Consultancy',
    description: 'Guidance on launching online learning programs and CDOL centers.'
  },
  {
    icon: '📊',
    title: 'Workshops & Training',
    description: 'Expert-led sessions on AI, Blockchain, Power BI, IoT, and more.'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-tile" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;