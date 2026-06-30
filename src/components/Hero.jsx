import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nandini Tawar
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Software Developer",
            2000,
            "React Developer",
            2000,
            "IT Engineering Student",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />

        <p className="hero-text">
          Passionate about building responsive web applications using
          React, Node.js, Express.js, and MySQL. I enjoy learning new
          technologies and solving real-world problems through software.
        </p>

        <div className="buttons">
          <a href="/resume.pdf" download className="resume-btn">
    📄 Download Resume
  </a>

  <a href="#contact" className="outline">
    Contact Me
  </a>
          
        </div>
      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profile} alt="Nandini" />
      </motion.div>
    </section>
  );
}

export default Hero;