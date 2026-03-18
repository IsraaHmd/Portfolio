import SectionHeader from "../UI/SectionHeader";
import Stats from "../UI/Stats";
import { ABOUT_ME_PARAGRAPH, ABOUT_ME_STATS } from "./data/aboutMe";
import "./styles/About.css";

export default function AboutMe() {
  return (
    <div className="about-me min-h-screen flex flex-col items-center justify-center text-center py-20">
      <SectionHeader text="About Me" />
      <p className="about-me-paragraph leading-relaxed max-w-4xl mx-auto mt-8">
        {ABOUT_ME_PARAGRAPH}
      </p>
      <Stats stats={ABOUT_ME_STATS} />
    </div>
  );
}