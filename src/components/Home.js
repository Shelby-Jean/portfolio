import React from 'react';
import { Link } from 'react-router-dom';
import CodingSequence from '../media/Coding_Sequence.mp4';
import '../css/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <video autoPlay loop muted className="home-video">
          <source src={CodingSequence} type="video/mp4" />
        </video>
        <div className="content-container">
          <h1 id="home-name">Shelby Gottschall</h1>
          <h2>front end developer</h2>
          <h3 className="nav-container"> <Link to="/about" className="nav-link">About</Link> </h3>
          <h3 className="nav-container"> <Link to="/work" className="nav-link">Work</Link> </h3>
        </div>
      </div>
    )
  }
}

export default Home;