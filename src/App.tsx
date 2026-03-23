import "./App.css";
import "./styles/theme.css";
import "./styles/global.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/projects" element={<ProjectsPage/>} />
    <Route path="/experience" element={<HomePage scrollTo="experience" />} />
    <Route path="/skills" element={<HomePage scrollTo="skills" />} />
    <Route path="/contact" element={<HomePage scrollTo="contact" />} />
  </Routes>
);
}

export default App;
