import AboutMe from "../components/layout/AboutMe";
import Contact from "../components/layout/Contact";
import EducationAndSkills from "../components/layout/EducationAndSkills";
import Hero from "../components/layout/HeroSection";
import LatestProjects from "../components/layout/LatestProjects";
import LatestProjectsMobile from "../components/layout/LatestProjectsMobile";
import MobileNavBar from "../components/layout/MobileNavBar";
import MyExperience from "../components/layout/MyExperience";
import NavBar from "../components/layout/NavBar";
import { useEffect } from "react";
import {QA} from "../components/layout/data/faq";
import FAQ from "../components/UI/FAQ";
interface HomePageProps {
  scrollTo?: string;
}
export default function HomePage({ scrollTo }: HomePageProps) {
  useEffect(() => {
    if (!scrollTo) return;
    const el = document.getElementById(scrollTo);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "instant" });
  }, [scrollTo]);
  
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
      <FAQ title="Common Questions" items={QA} />
      <Contact/>
    </div>
  );
}