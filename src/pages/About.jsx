import React from 'react';
import './AboutPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faLightbulb,
  faChalkboardTeacher,
  faChartLine,
  faBookOpen,
  faUserGraduate,
  faFilePowerpoint,
  faCheckCircle,
  faVideo,
  faFileAlt,
  faGlobe,
  faEdit,
  faUniversity,
  faCogs,
  faFlask,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="about-page">
      <header>
        <nav>
          <div className="logo">
            <a href="/"><img src="/images/Logo.png" alt="Logo" /></a>
          </div>

          <div className="hamburger"><i className="fa fa-bars"></i></div>
          <ul className="nav-links">
            <li className="nav-close"><i className="fa fa-times"></i></li>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#contact" className="contact-btn">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <div className="container">
          <h2>
            <FontAwesomeIcon icon={faGraduationCap} /> About PhiGrid Elite EdTech
          </h2>
          <p className="tagline">🚀 Revolutionizing Education Through Innovation</p>

          <hr className="solid-line" />

          <p>
            We started as a passionate group of <span className="highlight"> Subject Matter Experts (SMEs)</span>,
            expanding rapidly during the COVID-19 pandemic. By 2022,
            <strong> PhiGrid Elite EdTech</strong>
            was officially established to transform education through high-quality
            content, instructional design, and innovative solutions.
          </p>

          <p>
            At <strong> PhiGrid Elite EdTech</strong>, we are committed to
            transforming the education landscape by developing <span className="highlight">high-quality content</span>, engaging
            instructional experiences, and cutting-edge IT and embedded solutions.
            Our mission is to <span className="highlight"> enhance learning</span> through innovation,
            expertise, and technology-driven solutions.
          </p>

          <p>
            Recognized by esteemed institutions such as
            <strong> Amity, Simplilearn, and Coursera</strong>, we have established
            ourselves as a trusted partner in academia and corporate training. We
            are also seeking collaborations with
            <strong> Dayanand Sagar University</strong> and other institutions to
            develop comprehensive course materials across multiple disciplines,
            including Business Administration, Commerce, Computer Applications,
            and Engineering.
          </p>

          <hr className="dotted-line" />

          <h3><FontAwesomeIcon icon={faLightbulb} /> Our Expertise</h3>

          <p>
            Our structured content development process ensures academic rigor and
            engagement through instructional design principles, multimedia
            elements, and Bloom’s Taxonomy. We emphasize educational objectives,
            content curation, and interactive learning resources to create
            impactful study materials.
          </p>

          <div className="expertise-container">
            <div className="expertise-box">
              <FontAwesomeIcon icon={faChartLine} />
              <p>Educational Needs Analysis</p>
            </div>
            <div className="expertise-box">
              <FontAwesomeIcon icon={faBookOpen} />
              <p>Content Research & Curation</p>
            </div>
            <div className="expertise-box">
              <FontAwesomeIcon icon={faUserGraduate} />
              <p>Self-Learning Materials</p>
            </div>
            <div className="expertise-box">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
              <p>Instructional Design</p>
            </div>
            <div className="expertise-box">
              <FontAwesomeIcon icon={faFilePowerpoint} />
              <p>PowerPoint Presentations</p>
            </div>
            <div className="expertise-box">
              <FontAwesomeIcon icon={faCheckCircle} />
              <p>Quality Assurance</p>
            </div>
          </div>

          <hr className="dotted-line" />

          <h2>
            <FontAwesomeIcon icon={faChalkboardTeacher} /> UGC’s 4-Quadrant Approach Implementation
          </h2>

          <p>
            PhiGrid Elite EdTech follows the University Grants Commission’s (UGC)
            4-Quadrant Approach to online degree programs, ensuring a
            comprehensive learning experience:
          </p>

          <div className="quadrants">
            <div className="quadrant">
              <FontAwesomeIcon icon={faVideo} />
              <p>e-Tutorials</p>
            </div>
            <div className="quadrant">
              <FontAwesomeIcon icon={faFileAlt} />
              <p>e-Content</p>
            </div>
            <div className="quadrant">
              <FontAwesomeIcon icon={faGlobe} />
              <p>Web Resources</p>
            </div>
            <div className="quadrant">
              <FontAwesomeIcon icon={faEdit} />
              <p>Self-Assessment</p>
            </div>
          </div>

          <hr className="solid-line" />

          <h3>
            <FontAwesomeIcon icon={faUserGraduate} /> Meet Our Subject Matter Experts (SMEs)
          </h3>

          <p>
            Our team of <strong>100+ SMEs </strong>consists of Professors,
            Associate Professors, Assistant Professors, Editors, Corporate
            Trainers, and Industry Experts, bringing academic depth and real-world
            experience to content development. They:
          </p>

          <div className="sme-list">
            <ul>
              <li>
                <FontAwesomeIcon icon={faUniversity} /> Represent national & international institutions
              </li>
              <li>
                <FontAwesomeIcon icon={faCogs} /> Specialize in curriculum design & pedagogy
              </li>
              <li>
                <FontAwesomeIcon icon={faFlask} /> Engage in research & industry trends
              </li>
            </ul>
          </div>

          <hr className="dotted-line" />

          <h3><FontAwesomeIcon icon={faGlobe} /> Global Reach & Industry Relevance</h3>
          <p>
            With international expertise, we design content that meets global
            educational standards, incorporating best practices, diverse case
            studies, and region-specific insights to make learning more engaging
            and practical.
          </p>

          <h3><FontAwesomeIcon icon={faHandshake} /> Partner With Us</h3>

          <p>
            At <strong>PhiGrid Elite EdTech</strong>, we are committed to 
            <span className="highlight"> empowering educators</span> and
            <span className="highlight"> learners</span> with high-quality, engaging,
            and innovative educational materials. Whether you are an academic
            institution or a corporate organization, our expertise ensures that
            you receive tailored, impactful, and results-driven learning solutions.
          </p>

          <p>
            <strong>📧 Contact Us:</strong>
            <a href="mailto:skyetechsolutions.blr@gmail.com">
              info@phig-e2.co.in
            </a>
          </p>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div>
            <img src="/images/Logo.png" alt="Logo" />
            <p>© 2025 PhiGrid Elite EdTech, Inc.</p>
            <p>All rights reserved.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="/about">Mission</a></li>
              <li><a href="/about">Team</a></li>
              <li><a href="/about">Careers</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
