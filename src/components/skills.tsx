import bg from "../assets/bg 1.png";
import Nav from "./nav";

// ── SKILL LOGO IMPORTS ──
// Programming & Web Development
import html5Icon    from "../assets/skills/html5.png";
import css3Icon     from "../assets/skills/css3.png";
import tailwindIcon from "../assets/skills/tailwind.png";
import tsIcon       from "../assets/skills/typescript.png";
import jsIcon       from "../assets/skills/javascript.png";
import reactIcon    from "../assets/skills/react.png";
import rnIcon       from "../assets/skills/react-native.png";
import pythonIcon   from "../assets/skills/python.png";
import djangoIcon   from "../assets/skills/django.png";
import javaIcon     from "../assets/skills/java.png";

// Database Management
import postgresIcon from "../assets/skills/postgre.png";
import mysqlIcon    from "../assets/skills/mysql.png";

// Development Tools & Version Control
import gitIcon      from "../assets/skills/git.png";
import githubIcon   from "../assets/skills/github.png";
import gitbashIcon  from "../assets/skills/gitbash.png";
import vscodeIcon   from "../assets/skills/vscode.png";

// Multimedia & Design Tools
import canvaIcon    from "../assets/skills/canva.png";
import capcutIcon   from "../assets/skills/capcut.png";
import wpIcon       from "../assets/skills/wordpress.png";
import premiereIcon from "../assets/skills/premiere.png";
import figma from "../assets/skills/figma.png";


// ── SKILL DATA ──
const sections = [
  {
    title: "Programming & Web Development",
    skills: [
      { label: "HTML5",       icon: html5Icon },
      { label: "CSS3",        icon: css3Icon },
      { label: "Tailwind",    icon: tailwindIcon },
      { label: "TypeScript",  icon: tsIcon },
      { label: "JavaScript",  icon: jsIcon },
      { label: "React",       icon: reactIcon },
      { label: "React-Native",icon: rnIcon },
      { label: "Python",      icon: pythonIcon },
      { label: "Django",      icon: djangoIcon },
      { label: "Java",        icon: javaIcon },
      { label: "WordPress",   icon: wpIcon },
    ],
  },
  {
    title: "Database Management",
    skills: [
      { label: "PostgreSQL", icon: postgresIcon },
      { label: "MySQL",      icon: mysqlIcon },
    ],
  },
  {
    title: "Development Tools & Version Control",
    skills: [
      { label: "Git",               icon: gitIcon },
      { label: "GitHub",            icon: githubIcon },
      { label: "Git Bash",          icon: gitbashIcon },
      { label: "Visual Studio Code",icon: vscodeIcon },
    ],
  },
  {
    title: "Multimedia & Design Tools",
    skills: [
      { label: "Canva",             icon: canvaIcon },
      { label: "CapCut",            icon: capcutIcon },
      { label: "Figma",             icon: figma },
      { label: "Adobe Premiere Pro",icon: premiereIcon },
    ],
  },
];

const SkillItem = ({ label, icon }: { label: string; icon: string }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", minWidth: "64px" }}>
    <img src={icon} alt={label} style={{ width: "48px", height: "48px", objectFit: "contain", opacity: 0.9 }} />
    <span style={{ fontFamily: "'Anton SC', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center", lineHeight: "1.2" }}>
      {label}
    </span>
  </div>
);

const Skills = () => (
  <section style={{ position: "relative", height: "100vh", backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", overflow: "hidden" }}>

    <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }} />

    <Nav />

    <div style={{ position: "relative", zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", height: "calc(100vh - 100px)", padding: "0 80px" }} className="skills-grid">

      {sections.map((section, i) => (
        <div key={i} style={{ padding: "40px 40px 32px", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none", borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.08)" : "none", display: "flex", flexDirection: "column", gap: "28px" }}>

          <h3 style={{ fontFamily: "'Anton SC', sans-serif", fontSize: "15px", color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
            {section.title}
          </h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "28px 40px", alignItems: "flex-start" }}>
            {section.skills.map((s) => (
              <SkillItem key={s.label} label={s.label} icon={s.icon} />
            ))}
          </div>
        </div>
      ))}
    </div>

    <style>{`
      @media (max-width: 768px) {
        .skills-grid { grid-template-columns: 1fr !important; padding: 0 28px !important; height: auto !important; overflow-y: auto !important; }
      }
      @media (max-width: 1200px) and (min-width: 769px) {
        .skills-grid { padding: 0 40px !important; }
      }
    `}</style>
  </section>
);

export default Skills;