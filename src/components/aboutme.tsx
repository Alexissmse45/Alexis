import bg from "../assets/bg 1.png";
import gradpic from "../assets/gradpic.png";
import Nav from "./nav";

const AboutMe = () => {
  return (
    <section style={{ position: "relative", minHeight: "100vh", backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />

      <Nav />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", gap: "64px", padding: "4px 250px 80px", minHeight: "calc(100vh - 100px)" }} className="about-content">

        <div style={{ flexShrink: 0 }} className="about-photo">
          <img src={gradpic} alt="Alexis graduation" style={{ width: "clamp(220px, 28vw, 340px)", borderRadius: "12px", display: "block", objectFit: "cover" }} />
        </div>

        <div className="about-text">
          <h1 style={{ fontFamily: "'Anton SC', sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: "1.08", color: "#fff", textTransform: "uppercase", margin: "0 0 20px 0" }}>
            Hi, I'm Alexis<br />A Recent Computer Science Graduate
          </h1>

          {/* ── PARAGRAPH 1 —*/}
          <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "14px", lineHeight: "1.7", color: "rgba(255,255,255,0.88)", margin: "0 0 16px 0" }}>
            From Pamantasan ng Lungsod ng Maynila. I'm passionate about technology, software development,
            and creating solutions that make everyday tasks easier and more efficient.
          </p>

          {/* ── PARAGRAPH 2 ── */}
          <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "14px", lineHeight: "1.7", color: "rgba(255,255,255,0.88)", margin: "0 0 16px 0" }}>
            Throughout my academic/internship journey, I've worked on various projects involving web development,
            database management, and software engineering. These experiences helped me strengthen both
            my technical skills and my ability to work with others in a team environment.
          </p>

          {/* ── PARAGRAPH 3 ── */}
          <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "14px", lineHeight: "1.7", color: "rgba(255,255,255,0.88)", margin: "0 0 16px 0" }}>
            Outside of coding, I'm known for being a cheerful and easygoing person who enjoys making
            people laugh and maintaining a positive atmosphere. I believe that challenges and constructive
            criticism are opportunities for growth. Instead of letting negative feedback discourage me,
            I use it as motivation to improve, learn, and become a better version of myself.
          </p>

          {/* ── PARAGRAPH 4 — career goals ── */}
          <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "14px", lineHeight: "1.7", color: "rgba(255,255,255,0.88)", margin: 0 }}>
            As I begin my professional career, I'm excited to continue learning, take on new challenges,
            and contribute to projects where I can make a meaningful impact while growing as a software developer.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-content { flex-direction: column !important; padding: 32px 28px 48px !important; gap: 32px !important; align-items: flex-center !important; }
          .about-photo img { width: 100% !important; max-width: 280px !important; }
        }
        @media (max-width: 1200px) and (min-width: 769px) {
          .about-content { padding: 48px 48px 64px !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;