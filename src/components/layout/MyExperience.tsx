import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeader from "../UI/SectionHeader";
import TransparentButton from "../UI/TransparentButton";
import "./styles/MyExperience.css";
import BulletItem from "../UI/BulletItem";
import { FULLSTACK_ITEMS, TUTORING_ITEMS } from "./data/myExperience";

export default function MyExperience() {
  const navigate = useNavigate();
  const underlineRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Underline animation stays as IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    underlineRefs.current.forEach((el) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("experience-underline--animate");
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div id="experience" className="my-experience w-full">
      <SectionHeader text="My Experience" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

        {/* Left — Tutoring */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="experience-subtitle">Tutoring</h3>
          <div
            className="experience-underline"
            ref={(el) => { underlineRefs.current[0] = el; }}
          />
          <motion.div
            className="flex flex-col gap-4 w-full mt-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            {TUTORING_ITEMS.map((item, i) => (
              <BulletItem key={i} title={item.title} description={item.description} />
            ))}
          </motion.div>
        </div>

        {/* Right — Full Stack */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="experience-subtitle">Full Stack Web Development</h3>
          <div
            className="experience-underline"
            ref={(el) => { underlineRefs.current[1] = el; }}
          />
          <motion.div
            className="flex flex-col gap-4 w-full mt-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            {FULLSTACK_ITEMS.map((item, i) => (
              <BulletItem key={i} title={item.title} description={item.description} />
            ))}
          </motion.div>
          <TransparentButton text="View Projects" onClick={() => navigate("/projects")} />
        </div>

      </div>
    </div>
  );
}