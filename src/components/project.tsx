import { useNavigate } from "react-router-dom";
import bg from "../assets/bg 1.png";
import Nav from "./nav";

// ── ADD YOUR PROJECT THUMBNAIL IMPORTS HERE ──
import celerity from "../assets/project/cel-logo.png";
import kinetiq from "../assets/project/kinetiq-logo.png";
import Thesis from "../assets/project/thesis-cert.png";
import Bootup from "../assets/project/bootup-logo.png";

// ─────────────────────────────────────────────
// EDIT YOUR PROJECTS HERE
// ─────────────────────────────────────────────
const projects = [
  { id: 1, title: "Celerity Compiler", description: "An academic project to make a custom compiler. Celerity is inpired by C language", thumbnail: celerity },
  { id: 2, title: "Kinetiq", description: "An Enterprise Resource Planning (ERP) system developed as part of our academic project.", thumbnail: kinetiq },
  { id: 3, title: "Thesis", description: "My undergraduate thesis project focusing on Enhancing CNN algorithm.", thumbnail: Thesis },
  { id: 4, title: "BootUp", description: "A mobile game application as part of our academic project.", thumbnail: Bootup },
  //{ id: 5, title: "PROJECT TITLE 5", description: "project description", thumbnail: null },
];
// ─────────────────────────────────────────────

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section style={{ position: "relative", minHeight: "100vh", backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }} />

      <Nav />

      <div style={{ position: "relative", zIndex: 10, padding: "32px 96px 64px" }} className="projects-content">
        {projects.map((proj, i) => (
          <div key={proj.id} onClick={() => navigate(`/projects/${proj.id}`)}
            style={{ display: "flex", alignItems: "center", gap: "32px", padding: "20px 0", borderBottom: i < projects.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none", cursor: "pointer", transition: "background 0.2s", borderRadius: "4px" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>

            <div style={{ width: "180px", height: "110px", flexShrink: 0, backgroundColor: "rgba(255,255,255,0.15)", borderRadius: "6px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {proj.thumbnail
                ? <img src={proj.thumbnail} alt={proj.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                : <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", fontFamily: "'Archivo Narrow', sans-serif" }}>Image here</span>
              }
            </div>

            <div>
              <h3 style={{ fontFamily: "'Anton SC', sans-serif", fontSize: "22px", color: "#fff", textTransform: "uppercase", margin: "0 0 6px 0", letterSpacing: "0.02em" }}>{proj.title}</h3>
              <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", margin: 0 }}>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-content { padding: 24px 28px 48px !important; }
          .projects-content > div { flex-direction: column !important; align-items: flex-start !important; }
          .projects-content > div > div:first-child { width: 100% !important; height: 160px !important; }
        }
        @media (max-width: 1200px) and (min-width: 769px) {
          .projects-content { padding: 32px 48px 64px !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;