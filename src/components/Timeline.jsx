import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faLightbulb,
  faBriefcase,
  faChartPie,
  faDollarSign,
  faUsers,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

const timelineSteps = [
  { number: '1', text: 'Receive Syllabus from the Client', icon: faHandshake, flip: false },
  { number: '2', text: 'Brainstorm & Ideation', icon: faLightbulb, flip: true },
  { number: '3', text: 'Prepare Resources', icon: faBriefcase, flip: false },
  { number: '4', text: 'Analyze Progress', icon: faChartPie, flip: true },
  { number: '5', text: 'Budget & Approvals', icon: faDollarSign, flip: false },
  { number: '6', text: 'Team Collaboration', icon: faUsers, flip: true },
  { number: '7', text: 'Final Delivery', icon: faChartLine, flip: false }
];

const Timeline = () => {
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('slide-in');
            el.style.opacity = 1;
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    stepRefs.current.forEach(ref => {
      if (ref) {
        ref.style.opacity = 0;
        observer.observe(ref);
      }
    });

    return () => {
      stepRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <p className="timeline-title">Content Development Process</p>
      <div className="timeline-container">
        {timelineSteps.map((step, index) => {
          const isTopIcon = !step.flip;
          return (
            <div
              className="timeline-step"
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
            >
              {isTopIcon && (
                <div className="top-icon-wrapper">
                  <div className="icon-circle">
                    <FontAwesomeIcon icon={step.icon} />
                  </div>
                  <div className="vertical-line" />
                </div>
              )}

              <div className="bar-chunk" />

              <div className="step-info">
                <div className="step-number">{step.number}</div>
                <div className="step-text">{step.text}</div>
              </div>

              {!isTopIcon && (
                <div className="bottom-icon-wrapper">
                  <div className="vertical-line" />
                  <div className="icon-circle">
                    <FontAwesomeIcon icon={step.icon} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
