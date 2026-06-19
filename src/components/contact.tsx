import { useState, useEffect } from "react";
import { Download, ArrowLeft, ArrowRight } from "lucide-react";
import bg from "../assets/bg 1.png";
import profileImage from "../assets/img-contact.png";
import Nav from "./nav";

import Celerity from "../assets/project/celerity.png";
import Kinetiq from "../assets/project/kinetiq1.png";
import Thesis from "../assets/project/thesis.png";

const carouselImages: string[] = [Celerity, Kinetiq, Thesis];

const contactInfo = {
  email1:    "alexistolin60@gmail.com",
  email2:    "alexissmse45@gmail.com",
  location:  "Tondo, Manila, Philippines",
  github:    "https://github.com/Alexissmse45",
  linkedin:  "https://www.linkedin.com/in/alexis-tolin-a3946337/",
  jobstreet: "https://ph.jobstreet.com/profiles/alexisreginald-tolin-4eZmJjwMHy",
};

const Contact = () => {
  const [current, setCurrent] = useState(0);
  const [dlHovered, setDlHovered] = useState(false);

  const handleDownload = () => window.open("Tolin-Resume.pdf", "_blank");
  const prev = () => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);
  const next = () => setCurrent((c) => (c + 1) % carouselImages.length);

  useEffect(() => {
    if (carouselImages.length < 2) return;
    const t = setInterval(next, 3000);
    return () => clearInterval(t);
  }, []);

  const CarouselBox = ({ height }: { height: string }) => (
    <div style={{ position: "relative", width: "100%", height, backgroundColor: "rgba(210,210,210,0.2)", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {carouselImages.length > 0 ? (
        <>
          <img src={carouselImages[current]} alt={`work ${current + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          {carouselImages.length > 1 && (
            <>
              <button onClick={prev} style={{ position: "absolute", left: "10px", background: "rgba(0,0,0,0.5)", border: "none", color: "#fff", borderRadius: "50%", width: "28px", height: "28px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><ArrowLeft size={14} /></button>
              <button onClick={next} style={{ position: "absolute", right: "10px", background: "rgba(0,0,0,0.5)", border: "none", color: "#fff", borderRadius: "50%", width: "28px", height: "28px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><ArrowRight size={14} /></button>
              <div style={{ position: "absolute", bottom: "8px", display: "flex", gap: "6px" }}>
                {carouselImages.map((_, i) => (
                  <div key={i} onClick={() => setCurrent(i)} style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.4)", cursor: "pointer" }} />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <span style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Carousel images of your works
        </span>
      )}
    </div>
  );

  return (
    <section style={{ position: "relative", height: "100vh", backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />

      <Nav />

      {/* ── DESKTOP ── */}
      <div className="contact-desktop" style={{ position: "relative", zIndex: 10, height: "calc(90vh - 100px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", width: "min(890px, 75vw)" }} className="contact-content">
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <div style={{ width: "540px", height: "300px", flexShrink: 0 }}>
              <CarouselBox height="300px" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px", maxWidth: "200px" }}>
              <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.75)", lineHeight: "1.65", margin: 0 }}>
                Interested in learning more about my background, experience, and projects?
                Download my CV to view my educational background, technical skills and project experience.
              </p>
              <Download size={18} color="#fff" />
              <button onClick={handleDownload} onMouseEnter={() => setDlHovered(true)} onMouseLeave={() => setDlHovered(false)}
                style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "12px 24px", border: "2px solid #fff", backgroundColor: dlHovered ? "#000" : "#fff", color: dlHovered ? "#fff" : "#000", transition: "background-color 0.25s, color 0.25s", cursor: "pointer", width: "100%" }}>
                Download Resume
              </button>
            </div>
          </div>

          <h2 style={{ fontFamily: "'Anton SC', sans-serif", fontSize: "clamp(28px, 3vw, 42px)", color: "#fff", textTransform: "uppercase", margin: 0, lineHeight: "1.05" }}>Let's Work Together</h2>

          <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "13px", lineHeight: "1.7", color: "rgba(255,255,255,0.85)", margin: 0, maxWidth: "620px" }}>
            Whether you have a project in mind, an internship opportunity, or simply want to connect,
            I'd be happy to hear from you. As a Computer Science graduate, I'm actively looking for
            opportunities where I can apply my skills, continue learning, and contribute to meaningful
            projects. Feel free to reach out through any of the platforms below.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "0 16px", maxWidth: "620px" }}>
            {[
              { text: contactInfo.email1,    href: `mailto:${contactInfo.email1}` },
              { text: contactInfo.github,    href: contactInfo.github },
              { text: contactInfo.email2,    href: `mailto:${contactInfo.email2}` },
              { text: contactInfo.linkedin,  href: contactInfo.linkedin },
              { text: contactInfo.location,  href: undefined },
              { text: contactInfo.jobstreet, href: contactInfo.jobstreet },
            ].map(({ text, href }) => (
              href
                ? <a key={text} href={href} target="_blank" rel="noreferrer"
                    style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.7)", textDecoration: "none", lineHeight: "2", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>{text}</a>
                : <span key={text} style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.7)", lineHeight: "2", display: "block" }}>{text}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE — everything centered ── */}
      <div className="contact-mobile" style={{ display: "none", position: "relative", zIndex: 10, height: "calc(100vh - 80px)", overflowY: "auto", flexDirection: "column", alignItems: "center", padding: "24px 24px 48px", gap: "20px" }}>

        {/* Carousel centered */}
        <div style={{ width: "100%", maxWidth: "380px", height: "200px" }}>
          <CarouselBox height="200px" />
        </div>

        {/* Download block centered */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", width: "100%", maxWidth: "320px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.75)", lineHeight: "1.65", margin: 0 }}>
            Interested in learning more about my background, experience, and projects?
            Download my CV to view my educational background, technical skills and project experience.
          </p>
          <Download size={18} color="#fff" />
          <button onClick={handleDownload}
            style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "12px 32px", border: "2px solid #fff", backgroundColor: "#fff", color: "#000", cursor: "pointer" }}>
            Download Resume
          </button>
        </div>

        {/* Let's Work Together centered */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", width: "100%", maxWidth: "360px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Anton SC', sans-serif", fontSize: "30px", color: "#fff", textTransform: "uppercase", margin: 0, lineHeight: "1.05" }}>Let's Work Together</h2>
          <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "13px", lineHeight: "1.7", color: "rgba(255,255,255,0.85)", margin: 0 }}>
            Whether you have a project in mind, an internship opportunity, or simply want to connect,
            I'd be happy to hear from you. As a Computer Science graduate, I'm actively looking for
            opportunities where I can apply my skills, continue learning, and contribute to meaningful
            projects. Feel free to reach out through any of the platforms below.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
            {[
              { text: contactInfo.email1,   href: `mailto:${contactInfo.email1}` },
              { text: contactInfo.email2,   href: `mailto:${contactInfo.email2}` },
              { text: contactInfo.location, href: undefined },
              { text: "GitHub",             href: contactInfo.github },
              { text: "LinkedIn",           href: contactInfo.linkedin },
              { text: "JobStreet",          href: contactInfo.jobstreet },
            ].map(({ text, href }) => (
              href
                ? <a key={text} href={href} target="_blank" rel="noreferrer"
                    style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.7)", textDecoration: "none", lineHeight: "2.2" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>{text}</a>
                : <span key={text} style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.7)", lineHeight: "2.2" }}>{text}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Photo desktop only */}
      <div style={{ position: "absolute", right: 0, bottom: 0, zIndex: 9, pointerEvents: "none", userSelect: "none" }} className="contact-photo">
        <img src={profileImage} alt="Alexis" style={{ height: "86vh", maxHeight: "840px", display: "block", verticalAlign: "bottom" }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-desktop { display: none !important; }
          .contact-mobile  { display: flex !important; }
          .contact-photo   { display: none !important; }
        }
        @media (max-width: 1281px) and (min-width: 769px) {
          .contact-content { width: min(720px, 88vw) !important; }
          .contact-photo img { height: 70vh !important; opacity: 0.5 !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;