import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import '../css/About.css';

class About extends React.Component {
  render() {
    return (
      <div id="bg-img">
        <Header />
        <Navigation />
        <div className="about-content-container">
          <div className="about-container">
          </div>
          <div className="photo-contact-container">
            <div className="photo-container">
            </div>
            <div className="contact-container">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;