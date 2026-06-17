import { useState } from "react";
import { ArrowRight } from "lucide-react";

import bg from "../assets/bg 1.png";
import profileImage from "../assets/img-ko.png";
import Nav from "./nav";

const LandingPage = () => {
  const [hovered, setHovered] = useState(false);

  const handleViewResume = () => window.open("/Tolin_Resume.pdf", "_blank"); //lagay lang sa public yung resume

  return (
    <section style={{ position: "relative", minHeight: "100vh", backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.45)" }} />

      <Nav />

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", minHeight: "calc(100vh - 100px)", padding: "0 96px" }} className="main-content">
        <div style={{ maxWidth: "600px" }} className="left-content">

          <h1 className="landing-h1" style={{ fontFamily: "'Anton SC', sans-serif", fontSize: "55px", lineHeight: "1.06", color: "#fff", textTransform: "uppercase", margin: 0, whiteSpace: "nowrap" }}>
            Hi, I'm Alexis<br />A Computer Science Graduate
          </h1>

          <p className="landing-p" style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "15px", lineHeight: "1.65", color: "rgba(255,255,255,0.88)", marginTop: "18px", marginBottom: 0, maxWidth: "520px" }}>
            A recent Computer Science graduate with a passion for software development and problem-solving.
            During my studies, I gained experience in web development, databases, and software design through
            academic and personal projects. I enjoy learning new technologies and continuously improving my
            skills. I'm currently seeking opportunities where I can grow as a developer, contribute to
            meaningful projects, and build innovative solutions that make a difference.
          </p>

          <h2 className="landing-h2" style={{ fontFamily: "'Anton SC', sans-serif", fontSize: "34px", lineHeight: "1.1", color: "#fff", textTransform: "uppercase", marginTop: "24px", marginBottom: 0 }}>
            Currently Seeking Internship and<br />Junior Developer Roles
          </h2>

          <div onClick={handleViewResume} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "24px", cursor: "pointer", width: "fit-content" }}>
            <ArrowRight size={36} color="#fff" style={{ transition: "transform 0.28s ease", transform: hovered ? "translateX(10px)" : "translateX(0)", flexShrink: 0 }} />
            <button style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "15px 56px", border: "2px solid #fff", backgroundColor: hovered ? "#000" : "#fff", color: hovered ? "#fff" : "#000", transition: "background-color 0.28s ease, color 0.28s ease", cursor: "pointer" }}>
              View Resume
            </button>
          </div>
        </div>

        {/* Profile photo — hidden on mobile */}
        <div style={{ position: "absolute", right: 0, bottom: 0, pointerEvents: "none", userSelect: "none" }} className="profile-img">
          <img src={profileImage} alt="Alexis" style={{ height: "88vh", maxHeight: "860px", display: "block", verticalAlign: "bottom" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) and (min-width: 769px) {
          .main-content  { padding: 0 48px !important; }
          .left-content  { max-width: 45% !important; }
          .landing-h1    { font-size: 38px !important; white-space: normal !important; }
          .landing-p     { font-size: 13px !important; max-width: 100% !important; }
          .landing-h2    { font-size: 26px !important; }
          .profile-img img { height: 80vh !important; opacity: 0.55 !important; }
        }
        @media (max-width: 768px) {
          .main-content  { padding: 0 28px !important; }
          .left-content  { max-width: 100% !important; }
          .landing-h1    { font-size: 32px !important; white-space: normal !important; }
          .landing-p     { font-size: 13px !important; max-width: 100% !important; }
          .landing-h2    { font-size: 22px !important; }
          .profile-img   { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default LandingPage;