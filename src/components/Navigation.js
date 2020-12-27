import { Link } from'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav-container">
      <Link to="/" className="nav-link"> <h3>Home</h3> </Link>
      <Link to="/about" className="nav-link"> <h3>About</h3> </Link>
      <Link to="/work" className="nav-link"> <h3>Work</h3> </Link>
    </div>
  )
}

export default Navigation;