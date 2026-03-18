import AboutMe from "../components/layout/AboutMe";
import Hero from "../components/layout/HeroSection";
import LatestProjects from "../components/layout/LatestProjects";
import LatestProjectsMobile from "../components/layout/LatestProjectsMobile";
import MobileNavBar from "../components/layout/MobileNavBar";
import NavBar from "../components/layout/NavBar";

export default function HomePage() {
  return (
    <div className="bg-theme text-theme">
      <div className="hidden lg:block"><NavBar /></div>
      <div className="lg:hidden"><MobileNavBar /></div>
      <Hero />
      <div className="hidden lg:block"><LatestProjects /></div>
      <div className="lg:hidden"><LatestProjectsMobile /></div>
      <AboutMe />
    </div>
  );
}