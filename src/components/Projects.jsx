import "./Projects.css";

import shopping from "../assets/projects/shopping.png";
import event from "../assets/projects/event.png";
import emotion from "../assets/projects/emotion.png";

function Projects() {
  const projects = [
    {
      title: "Online Shopping Website",
      image: shopping,
      tech: ["React", "Node.js", "Express.js", "MySQL"],
      description:
        "A full-stack e-commerce website with secure authentication, shopping cart, order management, responsive design, and MySQL database integration.",
    },
    {
      title: "Event Management System",
      image: event,
      tech: ["React", "Node.js", "Express.js", "MySQL"],
      description:
        "An event booking platform with user registration, event scheduling, booking management, and an admin dashboard.",
    },
    {
      title: "AI Emotion Detector",
      image: emotion,
      tech: ["Python", "OpenCV", "DeepFace", "TensorFlow"],
      description:
        "A real-time AI application that detects human emotions from facial expressions using computer vision and deep learning.",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;