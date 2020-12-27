import React from 'react';
import Navigation from './Navigation';
import '../css/About.css';

class About extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="about-content-container">
          <div className="photo-contact-container">
            <div className="photo-container">
            </div>
            <div className="contact-container">

            </div>
          </div>
          <div className="about-container">

          </div>
        </div>
      </div>
    )
  }
}

export default About;