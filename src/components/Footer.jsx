import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Nandini Tawar</h2>

      <p>Software Developer | Full Stack Developer</p>

      <div className="footer-icons">

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:your-email@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <a href="#home" className="top-btn">
        <FaArrowUp />
      </a>

      <p className="copyright">
        © 2026 Nandini Tawar. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;