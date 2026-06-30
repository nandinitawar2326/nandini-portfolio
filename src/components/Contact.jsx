import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <p className="contact-subtitle">
        I'm always open to internship opportunities, collaborations,
        and exciting software development projects.
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>nandinitawar2330@gmail.com</p>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <a
            href="https://github.com/nandinitawar2326"
            target="_blank"
            rel="noreferrer"
          >
            github.com/nandinitawar2326
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <a
            href="https://linkedin.com/in/nandini-tawar-4b0857329/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/nandini-tawar-4b0857329/
          </a>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <p>+91 8468850843</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;