import "./About.css";
import { FaLaptopCode, FaGraduationCap, FaLightbulb,  FaMapMarkerAlt } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">

        <div className="about-text">
           <p>
             Hi! I'm <span>Nandini Tawar</span>, an Information Technology Engineering
             student at <span>Dr. D. Y. Patil College of Engineering, Akurdi, Pune</span>.
            I am passionate about building modern web applications and continuously
            improving my software development skills. 
         </p>

            <p>
            I enjoy developing responsive and user-friendly applications using
            React, Node.js, Express.js, and MySQL. My goal is to become a
            <span> Full Stack Developer </span> and create impactful software that
             solves real-world problems.
             </p>

            <p>
             🎓 <strong>Expected Graduation:</strong> 2028
             </p>
        </div>

        <div className="about-cards">

          <div className="card">
            <FaLaptopCode className="icon"/>
            <h3>Specialization</h3>
            <p>Full Stack Development</p>
          </div>

          <div className="card">
            <FaGraduationCap className="icon"/>
            <h3>Education</h3>
            <p>B.Tech Information Technology(Expected 2028)</p>
          </div>

          <div className="card">
            <FaLightbulb className="icon"/>
            <h3>Career Goal</h3>
            <p>Full Stack Software Developer</p>
          </div>
          <div className="card">
             <FaMapMarkerAlt className="icon" />
         <h3>Location</h3>
            <p>Pune, Maharashtra, India</p>
            </div>

        </div>

      </div>
    </section>
  );
}

export default About;