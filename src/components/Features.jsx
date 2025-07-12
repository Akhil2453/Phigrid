import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <section className="difference">
      <div className="container">
        <div className="features">
          <div className="feature">
            <div className="icon">
              <FontAwesomeIcon icon={faUserGraduate} />
            </div>
            <div className="feature-text">
              <h3>Personalized Learning</h3>
              <p>
                Innovative Curriculum <br />
                Tailored to Your Needs
              </p>
            </div>
          </div>
          
          <div className="feature">
            <div className="icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <div className="feature-text">
              <h3>Adaptive Assessment</h3>
              <p>
                Continuous Feedback for <br />
                Accelerated Growth
              </p>
            </div>
          </div>
          
          <div className="feature">
            <div className="icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <div className="feature-text">
              <h3>Collaborative</h3>
              <p>
                Connecting Learners and <br />
                Educators for Seamless
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;