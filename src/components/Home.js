import React from 'react';
import { Link } from 'react-router-dom';
import CodingSequence from '../media/Coding_Sequence.mp4';
import '../css/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <video autoPlay loop muted className="bg-video">
          <source src={CodingSequence} type="video/mp4" />
        </video>
        <div className="home-content-container">
          <div className="name-title-container">
            <h1 id="home-header">Shelby Gottschall</h1>
            <h2 id="title-name">front end developer</h2>
          </div>
          <div className="home-nav-container">
            <Link to="/about" className="home-nav-link"> <h3>About</h3> </Link> 
            <Link to="/work" className="home-nav-link"> <h3>Work</h3> </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;