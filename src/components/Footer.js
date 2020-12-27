import { Link } from 'react-router-dom';
import LinkedInIcon from '../media/LinkedIn-icon.png';
import GitHubIcon from '../media/GitHub-icon.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="https://www.linkedin.com/in/shelbygottschall/" target="_blank">
        <img className="footer-icon" src={LinkedInIcon} />
      </a>
      <a href="https://github.com/Shelby-Jean" target="_blank">
      <img className="footer-icon" src={GitHubIcon} />
      </a>
    </div>
  )
}
export default Footer;