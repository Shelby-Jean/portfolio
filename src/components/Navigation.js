import { Link } from'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <h3 className="nav-container"> <Link to="/" className="nav-link">Home</Link> </h3>
      <h3 className="nav-container"> <Link to="/about" className="nav-link">About</Link> </h3>
      <h3 className="nav-container"> <Link to="/work" className="nav-link">Work</Link> </h3>
    </div>
  )
}

export default Navigation;