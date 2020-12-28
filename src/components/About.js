import React from 'react';
import Navigation from './Navigation';
import '../css/About.css';

class About extends React.Component {
  render() {
    return (
      <div id="bg-img">
        <Navigation />
        <div className="about-content-container">
          <div className="photo-contact-container">
            <div className="photo-container">
            </div>
            <div className="contact-container">
              <h3>Shelby Gottschall</h3>
              <h4>Charlotte, NC</h4>
              <h4>shelby.gottschall@gmail.com</h4>
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