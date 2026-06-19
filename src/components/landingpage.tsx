import { useState } from "react";
import { ArrowRight } from "lucide-react";

import bg from "../assets/bg 1.png";
import profileImage from "../assets/img-ko.png";
import Nav from "./nav";

const LandingPage = () => {
  const [hovered, setHovered] = useState(false);

  const handleViewResume = () => window.open("Tolin-Resume.pdf");

  return (
    <section style={{ position: "relative", minHeight: "100vh", backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.45)" }} />

      {/* ── Animated background particles ── */}
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className={`particle particle-${i}`} />
        ))}
      </div>

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
            <button className="sheen-btn" style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "15px 56px", border: "2px solid #fff", backgroundColor: hovered ? "#000" : "#fff", color: hovered ? "#fff" : "#000", transition: "background-color 0.28s ease, color 0.28s ease", cursor: "pointer", position: "relative", overflow: "hidden" }}>
              View Resume
            </button>
          </div>
        </div>

        {/* Profile photo */}
        <div style={{ position: "absolute", right: 0, bottom: 0, pointerEvents: "none", userSelect: "none" }} className="profile-img">
          <img src={profileImage} alt="Alexis" style={{ height: "88vh", maxHeight: "860px", display: "block", verticalAlign: "bottom" }} />
        </div>
      </div>

      <style>{`
        /* ── Floating particles ── */
        .particles {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          animation: floatUp linear infinite;
        }

        /* Each particle gets unique size, position, duration, delay */
        .particle-0  { width:3px;  height:3px;  left:5%;   animation-duration:14s; animation-delay:0s;    }
        .particle-1  { width:5px;  height:5px;  left:12%;  animation-duration:18s; animation-delay:2s;    }
        .particle-2  { width:2px;  height:2px;  left:20%;  animation-duration:12s; animation-delay:0.5s;  }
        .particle-3  { width:4px;  height:4px;  left:28%;  animation-duration:20s; animation-delay:3s;    }
        .particle-4  { width:6px;  height:6px;  left:35%;  animation-duration:16s; animation-delay:1s;    }
        .particle-5  { width:2px;  height:2px;  left:42%;  animation-duration:22s; animation-delay:4s;    }
        .particle-6  { width:5px;  height:5px;  left:50%;  animation-duration:15s; animation-delay:1.5s;  }
        .particle-7  { width:3px;  height:3px;  left:58%;  animation-duration:19s; animation-delay:0.8s;  }
        .particle-8  { width:4px;  height:4px;  left:65%;  animation-duration:13s; animation-delay:2.5s;  }
        .particle-9  { width:2px;  height:2px;  left:72%;  animation-duration:17s; animation-delay:3.5s;  }
        .particle-10 { width:6px;  height:6px;  left:78%;  animation-duration:21s; animation-delay:0.2s;  }
        .particle-11 { width:3px;  height:3px;  left:84%;  animation-duration:11s; animation-delay:1.8s;  }
        .particle-12 { width:5px;  height:5px;  left:90%;  animation-duration:24s; animation-delay:4.5s;  }
        .particle-13 { width:2px;  height:2px;  left:8%;   animation-duration:16s; animation-delay:5s;    }
        .particle-14 { width:4px;  height:4px;  left:33%;  animation-duration:20s; animation-delay:6s;    }
        .particle-15 { width:3px;  height:3px;  left:55%;  animation-duration:18s; animation-delay:2.2s;  }
        .particle-16 { width:6px;  height:6px;  left:70%;  animation-duration:14s; animation-delay:3.8s;  }
        .particle-17 { width:2px;  height:2px;  left:95%;  animation-duration:23s; animation-delay:1.2s;  }

        @keyframes floatUp {
          0%   { bottom: -10px; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { bottom: 110%; opacity: 0; }
        }

        /* ── Sheen on View Resume button ── */
        .sheen-btn::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: rgba(255,255,255,0.22);
          transform: rotateZ(60deg) translate(-2em, -9em);
        }
        .sheen-btn:hover::after {
          animation: sheen 0.45s forwards;
        }
        @keyframes sheen {
          100% { transform: rotateZ(60deg) translate(1em, -9em); }
        }

        /* ── Existing responsive ── */
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
        @media (prefers-reduced-motion: reduce) {
          .particle, .sheen-btn::after { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default LandingPage;