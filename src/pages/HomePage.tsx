import AboutMe from "../components/layout/AboutMe";
import Contact from "../components/layout/Contact";
import EducationAndSkills from "../components/layout/EducationAndSkills";
import Hero from "../components/layout/HeroSection";
import LatestProjects from "../components/layout/LatestProjects";
import LatestProjectsMobile from "../components/layout/LatestProjectsMobile";
import MobileNavBar from "../components/layout/MobileNavBar";
import MyExperience from "../components/layout/MyExperience";
import NavBar from "../components/layout/NavBar";

export default function HomePage() {
  return (
    <div className="bg-theme text-theme">
      <div className="hidden lg:block"><NavBar /></div>
      <div className="lg:hidden"><MobileNavBar /></div>
      <Hero />
      <div className="hidden lg:block"><LatestProjects /></div>
      <div className="lg:hidden"><LatestProjectsMobile /></div>
      <MyExperience />
      <AboutMe />
      <EducationAndSkills />
      <Contact/>
    </div>
  );
}