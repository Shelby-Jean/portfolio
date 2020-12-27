import LinkedInIcon from '../media/LinkedIn-icon.png';
import GitHubIcon from '../media/GitHub-icon.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="https://www.linkedin.com/in/shelbygottschall/" target="_blank" rel="noreferrer">
        <img className="footer-icon" src={LinkedInIcon} alt="LinkedIn icon"/>
      </a>
      <a href="https://github.com/Shelby-Jean" target="_blank" rel="noreferrer">
      <img className="footer-icon" src={GitHubIcon} alt="GitHub icon"/>
      </a>
    </div>
  )
}
export default Footer;