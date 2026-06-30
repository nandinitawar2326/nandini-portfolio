import "./Education.css";
import { FaUniversity, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education-card">
        <FaUniversity className="edu-icon" />

        <h3>B.Tech  Information Technology</h3>

        <h4>Dr. D. Y. Patil College of Engineering, Akurdi, Pune</h4>

        <div className="edu-details">
          <p>
            <FaCalendarAlt /> 2024 - 2028 (Expected)
          </p>

          <p>
            <FaGraduationCap /> Undergraduate Student
          </p>
        </div>

        <p className="edu-description">
          Currently pursuing a Bachelor's degree in Information Technology.
          Passionate about Full Stack Development, Web Development, AI,
          and building scalable software applications using modern technologies.
        </p>
      </div>
    </section>
  );
}

export default Education;