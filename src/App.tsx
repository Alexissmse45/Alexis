import { Routes, Route } from "react-router-dom"
import LandingPage from "./components/landingpage"
import AboutMe     from "./components/aboutme"
import Projects    from "./components/project"
import Skills      from "./components/skills"
import Contact     from "./components/contact"
import ProjectView from "./components/view-project"

const App = () => {
  return (
    <Routes>
      <Route path="/"              element={<LandingPage />} />
      <Route path="/about"         element={<AboutMe />} />
      <Route path="/projects"      element={<Projects />} />
      <Route path="/projects/:id"  element={<ProjectView />} />
      <Route path="/skills"        element={<Skills />} />
      <Route path="/contact"       element={<Contact />} />
    </Routes>
    
  )
}

export default App