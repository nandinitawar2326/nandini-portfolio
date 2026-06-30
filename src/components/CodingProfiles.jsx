import "./CodingProfiles.css";
import { FaGithub, FaCode } from "react-icons/fa";

function CodingProfiles() {
  return (
    <section className="coding" id="coding">
      <h2 className="section-title">Coding Profiles</h2>

      <div className="coding-container">

        <div className="coding-card">
          <FaCode className="coding-icon" />

          <h3>LeetCode</h3>

          <p>Practicing Data Structures & Algorithms</p>

          <a
            href="https://leetcode.com/u/nandini2315/"
            target="_blank"
            rel="noreferrer"
            className="coding-btn"
          >
            View Profile
          </a>
        </div>

        <div className="coding-card">
          <FaGithub className="coding-icon" />

          <h3>GitHub</h3>

          <p>Projects & Open Source</p>

          <a
            href="https://github.com/nandinitawar2326"
            target="_blank"
            rel="noreferrer"
            className="coding-btn"
          >
            View GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default CodingProfiles;