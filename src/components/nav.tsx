import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import logo from "../assets/mylogo.png";

// ── ROUTE MAP — edit paths here if your routes differ ──
const navItems = [
  { label: "About me", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Skills",   path: "/skills" },
  { label: "Contact",  path: "/contact" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path: string) => { setMenuOpen(false); navigate(path); };

  return (
    <>
      <nav style={{ position: "relative", zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 96px" }} className="landing-nav">

        {/* Logo — clicking goes home */}
        <img src={logo} alt="Logo" onClick={() => navigate("/")} style={{ width: "clamp(60px, 8vw, 110px)", objectFit: "contain", cursor: "pointer" }} />

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "44px", listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
          {navItems.map(({ label, path }) => {
            const active = location.pathname === path;
            return (
              <li key={label} onClick={() => handleNav(path)}
                style={{ color: active ? "#fff" : "rgba(255,255,255,0.65)", fontSize: "18px", fontWeight: active ? 400 : 300, letterSpacing: "0.04em", cursor: "pointer", fontFamily: "'Sofia Sans Condensed', sans-serif", textDecoration: active ? "underline" : "none", textUnderlineOffset: "4px", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = active ? "#fff" : "rgba(255,255,255,0.65)")}>
                {label}
              </li>
            );
          })}
        </ul>

        {/* Burger (mobile only) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="burger-btn"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 0, color: "#fff" }}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile full-screen drawer */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 30, backgroundColor: "rgba(0,0,0,0.96)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "36px" }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: "24px", right: "24px", background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
            <X size={32} />
          </button>
          {navItems.map(({ label, path }) => (
            <span key={label} onClick={() => handleNav(path)}
              style={{ color: "#fff", fontSize: "32px", fontFamily: "'Sofia Sans Condensed', sans-serif", fontWeight: 400, letterSpacing: "0.06em", cursor: "pointer", textTransform: "uppercase" }}>
              {label}
            </span>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1200px) and (min-width: 769px) {
          .landing-nav { padding: 16px 48px !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn  { display: block !important; }
          .landing-nav { padding: 16px 28px !important; }
        }
      `}</style>
    </>
  );
};

export default Nav;