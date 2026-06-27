import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import bg from "../assets/bg 1.png";
import logo from "../assets/mylogo.png";

import Celerity from "../assets/project/celerity.png";
import Celerity2 from "../assets/project/celerity2.png";
import Celerity3 from "../assets/project/celerity3.png";
import Celerity4 from "../assets/project/celerity4.png";
import Celerity5 from "../assets/project/celerity5.png";
import Celerity6 from "../assets/project/celerity6.png";
import Kinetiq from "../assets/project/kinetiq.png";
import Kinetiq2 from "../assets/project/kinetiq1.png";
import Kinetiq3 from "../assets/project/kinetiq2.png";
import Thesis from "../assets/project/thesis-cert.png";
import Thesis2 from "../assets/project/thesis1.png";
import Thesis3 from "../assets/project/thesis2.png";
import Thesis4 from "../assets/project/thesis3.png";
import Thesis5 from "../assets/project/thesis1.jpeg";
import Thesis6 from "../assets/project/thesis2.jpeg";
import Bootup from "../assets/project/bootup..png";
import Bootup0 from "../assets/project/bootup.png";
import Bootup1 from "../assets/project/bootup1.png";
import Bootup2 from "../assets/project/bootup2.png";
import Bootup3 from "../assets/project/bootup3.png";

const projectDetails: Record<number, {
  title: string; description: string; images: string[];
  techStack: string[]; role: string; highlights: string[];
  liveUrl?: string; githubUrl?: string;
}> = {
  1: {
    title: "Full-Stack Celerity Compiler",
    description: "Celerity is a C-inspired programming language designed to simplify core programming concepts while maintaining the efficiency and structured approach of traditional compiled languages. This project is a full-stack web-based compiler that allows users to write, analyze, and execute Celerity code through an intuitive interface. It features lexical, syntax, and semantic analysis, along with intermediate code generation, providing a complete compiler workflow for learning and experimentation.",
    images: [Celerity, Celerity2, Celerity3, Celerity4, Celerity5, Celerity6],
    techStack: ["React", "TypeScript", "Python", "Flask"],
    role: "Full Stack Developer",
    highlights: [
      "Built an interactive web-based code editor with real-time compilation feedback.",
      "Developed a complete compiler pipeline including lexical, syntax, and semantic analysis.",
      "Deployed on Vercel / Railway",
    ],
    liveUrl: "https://final-celerity-compiler-q2anoz0se-alexissmse45s-projects.vercel.app/", githubUrl: "",
  },
  2: {
    title: "Kinetiq",
    description: "Kinetiq is an enterprise resource planning (ERP) system designed to streamline business operations across multiple departments. As a member of the Distribution Team, I contributed to the development of logistics and supply chain functionalities, including shipment management, delivery processing, inventory movement tracking, and operational cost monitoring. My responsibilities involved database design, backend development, data integration, and ensuring seamless coordination between distribution processes and other ERP modules. Through this project, I gained hands-on experience in building scalable business systems and solving real-world logistics challenges.",
    images: [Kinetiq, Kinetiq2, Kinetiq3],
    techStack: ["PostgreSQL",],
    role: "Database Manager",
    highlights: ["Collaborated with cross-functional teams to align distribution processes with overall business requirements.", "Created and validated relational database schemas, ensuring data integrity through foreign key relationships and avoid redundancy"],
    liveUrl: "", githubUrl: "",
  },
  3: { 
    title: "An Enhancement of Convolutional Neural Network (CNN) Algorithm Applied in First Aid Assistance System", 
    description: "An Enhancement of Convolutional Neural Network (CNN) Algorithm Applied in First Aid Assistance System is a thesis project that explores the use of artificial intelligence in assisting users with injury identification and first aid recommendations. The system utilizes an enhanced Convolutional Neural Network (CNN) model to analyze injury images and classify different types of injuries with improved accuracy. It also supports text-based descriptions to provide additional context for assessment and recommendation. Developed using Python, the research focuses on addressing common CNN limitations, improving classification performance, and incorporating confidence-based decision support to deliver more reliable first aid guidance. The project demonstrates the practical application of deep learning, machine learning, and computer vision in healthcare assistance.", 
    images: [Thesis5, Thesis6, Thesis, Thesis2, Thesis3, Thesis4], 
    techStack: ["Python"], 
    role: "Backend Developer", 
    highlights: ["Developed a recommendation system that provides appropriate first aid guidance based on detected injuries."], 
    liveUrl: "", 
    githubUrl: "" },
  4: { 
      title: "BootUp", 
      description: "BOOT UP! is a relaxing computer-themed puzzle game designed to introduce players to basic computer system concepts through interactive and visually engaging mini-games. The game combines entertainment and learning by allowing players to perform computer-related activities such as connecting system components, organizing motherboard parts, and fixing interface errors. Through these activities, players are introduced to simple computer concepts while enjoying a calm and pressure-free gaming experience.", 
      images: [Bootup, Bootup0, Bootup1, Bootup2, Bootup3], 
      techStack: ["React Native", "Expo"], 
      role: "Mobile Developer", 
      highlights: ["Game features a user-friendly interface, engaging gameplay mechanics, and smooth performance across various devices."], 
      liveUrl: "", githubUrl: "" },
  5: { title: "PROJECT TITLE 5", description: "project description", images: [], techStack: ["Ruby on Rails", "MySQL"], role: "Full Stack Developer", highlights: ["Feature 1", "Feature 2", "Feature 3"], liveUrl: "", githubUrl: "" },
};

const ProjectView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[Number(id)];
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!project) return (
    <div style={{ color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "'Archivo Narrow', sans-serif", fontSize: "18px" }}>
      Project not found.
    </div>
  );

  const images = project.images;
  const hasMany = images.length > 1;
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <section style={{ position: "relative", minHeight: "100vh", backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }} />

      {/* Lightbox */}
      {lightbox && images.length > 0 && (
        <div
          onClick={() => setLightbox(false)}
          style={{ position: "fixed", inset: 0, zIndex: 100, backgroundColor: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>

          {/* Close button */}
          <button onClick={() => setLightbox(false)}
            style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "none", color: "#fff", cursor: "pointer", zIndex: 101 }}>
            <X size={32} />
          </button>

          {/* Prev arrow */}
          {hasMany && (
            <button onClick={(e) => { e.stopPropagation(); prev(); }}
              style={{ position: "absolute", left: "24px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: "50%", width: "48px", height: "48px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 101 }}>
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Full image — stop propagation so clicking image doesn't close */}
          <img
            src={images[current]}
            alt={`${project.title} ${current + 1}`}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "88vh", objectFit: "contain", borderRadius: "4px", userSelect: "none" }}
          />

          {/* Next arrow */}
          {hasMany && (
            <button onClick={(e) => { e.stopPropagation(); next(); }}
              style={{ position: "absolute", right: "24px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: "50%", width: "48px", height: "48px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 101 }}>
              <ChevronRight size={24} />
            </button>
          )}

          {/* Counter */}
          {hasMany && (
            <span style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", fontFamily: "'Archivo Narrow', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
              {current + 1} / {images.length}
            </span>
          )}
        </div>
      )}

      {/* Top bar */}
      <nav style={{ position: "relative", zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 48px" }}>
        <button onClick={() => navigate("/projects")}
          style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "none", color: "#fff", cursor: "pointer", fontFamily: "'Sofia Sans Condensed', sans-serif", fontSize: "16px", letterSpacing: "0.06em", padding: 0 }}>
          <ArrowLeft size={18} />
          Projects
        </button>
        <img src={logo} alt="Logo" onClick={() => navigate("/")} style={{ width: "60px", objectFit: "contain", cursor: "pointer" }} />
      </nav>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "24px 96px 64px", maxWidth: "900px", margin: "0 auto" }} className="project-view-content">

        <h1 style={{ fontFamily: "'Anton SC', sans-serif", fontSize: "clamp(24px, 4vw, 44px)", color: "#fff", textTransform: "uppercase", margin: "0 0 4px 0", textAlign: "center" }}>
          {project.title}
        </h1>
        <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: "0 0 24px 0", textAlign: "left" }}>
          {project.description}
        </p>

        {/* Image carousel */}
        <div style={{ position: "relative", width: "100%", marginBottom: "32px" }}>
          <div
            onClick={() => images.length > 0 && setLightbox(true)}
            style={{ width: "100%", height: "320px", backgroundColor: "rgba(255,255,255,0.12)", borderRadius: "8px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", cursor: images.length > 0 ? "zoom-in" : "default" }}>
            {images.length > 0
              ? <img src={images[current]} alt={`${project.title} ${current + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
              : <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Archivo Narrow', sans-serif", fontSize: "14px" }}>Image here</span>
            }
          </div>

          {/* Hint text */}
          {images.length > 0 && (
            <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.3)", textAlign: "center", margin: "6px 0 0 0", letterSpacing: "0.05em" }}>
              Click image to view full screen
            </p>
          )}

          {/* Bottom-center nav */}
          {hasMany && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "10px" }}>
              <button onClick={prev}
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}>
                <ChevronLeft size={18} />
              </button>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                {images.map((_, i) => (
                  <div key={i} onClick={() => setCurrent(i)}
                    style={{ width: i === current ? "20px" : "8px", height: "8px", borderRadius: "4px", backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.35)", cursor: "pointer", transition: "all 0.25s" }} />
                ))}
              </div>
              <button onClick={next}
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}>
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Details */}
        <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }} className="project-details-row">
          <div>
            <p style={{ fontFamily: "'Anton SC', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px 0" }}>Role</p>
            <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "15px", color: "#fff", margin: 0 }}>{project.role}</p>
          </div>
          <div>
            <p style={{ fontFamily: "'Anton SC', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 8px 0" }}>Tech Stack</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.techStack.map(tech => (
                <span key={tech} style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "13px", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", padding: "3px 12px", borderRadius: "2px" }}>{tech}</span>
              ))}
            </div>
          </div>
          {(project.liveUrl || project.githubUrl) && (
            <div>
              <p style={{ fontFamily: "'Anton SC', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 8px 0" }}>Links</p>
              <div style={{ display: "flex", gap: "12px" }}>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "13px", color: "#fff", textDecoration: "underline", textUnderlineOffset: "3px" }}>Live Demo</a>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "13px", color: "#fff", textDecoration: "underline", textUnderlineOffset: "3px" }}>GitHub</a>}
              </div>
            </div>
          )}
        </div>

        <div style={{ marginTop: "28px" }}>
          <p style={{ fontFamily: "'Anton SC', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px 0" }}>Highlights</p>
          <ul style={{ padding: "0 0 0 20px", margin: 0 }}>
            {project.highlights.map((point, i) => (
              <li key={i} style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.88)", lineHeight: "1.7", marginBottom: "6px" }}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-view-content { padding: 20px 28px 48px !important; }
          .project-details-row { flex-direction: column !important; gap: 20px !important; }
        }
        @media (max-width: 1200px) and (min-width: 769px) {
          .project-view-content { padding: 24px 48px 64px !important; }
        }
      `}</style>
    </section>
  );
};

export default ProjectView;