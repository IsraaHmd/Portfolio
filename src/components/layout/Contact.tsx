import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import SectionHeader from "../UI/SectionHeader";
import "./styles/Contact.css";
import { CONTACT_LINKS } from "./data/contact";
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const overlay = overlayRef.current;
    if (!section || !overlay) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlay,
        { y: 0 },
        {
          y: () => -overlay.offsetHeight,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact-wrapper" ref={sectionRef}>

      {/* Contact content underneath */}
      <section className="contact-section w-full px-6 md:px-16 lg:px-40 flex flex-col items-center justify-center gap-12">

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as const }}
          viewport={{ once: true }}
        >
          <SectionHeader text="Contact" />
        </motion.div>

        <motion.p
          className="contact-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] as const }}
          viewport={{ once: true }}
        >
          For questions or to work with me
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 w-full justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] as const }}
          viewport={{ once: true }}
        >
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel={link.target ? "noopener noreferrer" : undefined}
              className="contact-link flex items-center gap-4 flex-1"
            >
              <div className="contact-icon">{link.icon}</div>
              <div className="flex flex-col text-left">
                <span className="contact-label">{link.label}</span>
                <span className="contact-value">{link.value}</span>
              </div>
            </a>
          ))}
        </motion.div>

      </section>

      {/* Overlay slides up to reveal contact */}
      <div className="contact-overlay" ref={overlayRef} />

    </div>
  );
}