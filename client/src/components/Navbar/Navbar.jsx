import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
function Navbar() {
  return (
  <>
  <div className="navbar">
<Sidebar/>
    <div className="wrapper">
      <span>Prakash Tech</span>
      <div className="social">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
      </div>
    </div>
  </div>
</>

  );
}

export default Navbar;
