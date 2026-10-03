import "./Projects.css";

import nirvana from "../assets/projects/nirvana.png";
import jansetuai from "../assets/projects/jansetuai.png";
import skyguardai from "../assets/projects/skyguardai.png";
import care360 from "../assets/projects/care360.png";
import shopping from "../assets/projects/shopping.png";
import event from "../assets/projects/event.png";
import emotion from "../assets/projects/emotion.png";

function Projects() {
  const projects = [
    {
      title: "NIRVANA – AI Cognitive Gaming Platform",
      image: nirvana,
      tech: ["Python", "Machine Learning", "scikit-learn", "FastAPI"],
      description:
        "An AI-based cognitive gaming and memory assistance platform for elderly dementia patients, featuring adaptive difficulty prediction and cognitive performance analysis.",
    },

    {
      title: "JanSetu AI",
      image: jansetuai,
      tech: ["React", "Python", "FastAPI", "SQLAlchemy"],
      description:
        "A cross-ministry governance and impact intelligence platform that analyzes government schemes, beneficiary coverage, resource utilization, geographic gaps, anomalies, and scheme overlaps.",
      demo: "https://jan-setu-ai-five.vercel.app/",
    },

    {
      title: "SkyGuard AI",
      image: skyguardai,
      tech: ["React", "AI/ML", "AWS"],
      description:
        "An AI weather intelligence platform for real-time monitoring of automatic weather stations, intelligent anomaly detection, sensor health analysis, and AI-powered data corrections.",
      demo: "https://sky-guard-ai-six.vercel.app/",
    },

    {
      title: "CARE360 – Remote Patient Monitoring",
      image: care360,
      tech: ["React", "Python", "FastAPI", "AI/ML"],
      description:
        "A remote patient monitoring platform that helps patients and caregivers track health readings, daily check-ins, medicines, appointments, health alerts, and emergency assistance with AI-assisted health monitoring.",
      demo: "https://care-360-2rdzbqll3-nandini2326.vercel.app/",
    },

    {
      title: "Event Management System",
      image: event,
      tech: ["React", "Node.js", "Express.js", "MySQL"],
      description:
        "A full-stack event booking platform with user authentication, event scheduling, booking management, REST APIs, MySQL integration, and an admin dashboard.",
    },

    {
      title: "Online Shopping Website",
      image: shopping,
      tech: ["React", "Node.js", "Express.js", "MySQL"],
      description:
        "A full-stack e-commerce website with authentication, product catalog, shopping cart, checkout, order management, responsive design, and MySQL database integration.",
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

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-demo"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;