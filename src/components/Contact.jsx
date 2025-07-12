import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/myzedrnr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setPopupVisible(true);
        setTimeout(() => setPopupVisible(false), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Error submitting form.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>CONTACT US</h2>

      {/* Map */}
      <div className="map-container">
        <iframe
          title="Google Map"
          frameBorder="0"
          style={{ border: 0, width: '100%', height: '100%' }}
          allowFullScreen
          loading="lazy"
          src="https://www.google.com/maps?q=Akshar+Canabee,+Sector+36,+Navi+Mumbai&output=embed"
        ></iframe>
      </div>

      {/* Grid */}
      <div className="grid-two-responsive">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#b45309', fontSize: 24 }} />
            <div>
              <h3>Address</h3>
              <p>Bangalore Office: SRS, Yelenahalli, Bangalore</p>
              <p>Mumbai Office: Akshar Canabee, Sector 36, Navi-Mumbai</p>
              <p>Pune Office: Eastania CHS, Ghorpadi, Pune</p>
            </div>
          </div>

          <div className="contact-item" style={{ marginTop: 16 }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: '#b45309', fontSize: 24 }} />
            <p>info@phig-e2.co.in</p>
          </div>

          <div className="contact-item" style={{ marginTop: 16 }}>
            <FontAwesomeIcon icon={faPhone} style={{ color: '#b45309', fontSize: 24 }} />
            {/* <p>+91 99878 72755</p> */}
            <p>+91 90084 91822</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Popup */}
      {popupVisible && (
        <div className="message-popup show">
          <h3>Message Sent!</h3>
          <p>Your message has been successfully sent! 🎉</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
