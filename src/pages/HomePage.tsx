import Hero from "../components/layout/HeroSection";
import NavBar from "../components/layout/NavBar";
import MobileNavBar from "../components/layout/MobileNavBar";
import "../styles/theme.css";
import LatestProjects from "../components/layout/LatestProjects";
export default function HomePage() {
  return (
    <div className="bg-theme text-theme">
      <div className="hidden lg:block"><NavBar /></div>
      <div className="lg:hidden"><MobileNavBar /></div>
      <Hero />
      <LatestProjects/>
    </div>
  );
}