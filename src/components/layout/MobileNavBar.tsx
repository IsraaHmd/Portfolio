import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import "./styles/MobileNavBar.css";

const NAV_LINKS = ["HOME", "PROJECTS", "SKILLS SUMMARY", "ABOUT", "CONTACT"];

export default function MobileNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Top bar */}
      <nav className={`mobile-navbar ${scrolled ? "mobile-navbar--scrolled" : ""}`}>
        <span className="nav-logo">PORTFOLIO</span>
        <button
          className="bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <RxHamburgerMenu className="mobile-hamburger__icon" />
        </button>
      </nav>

      {/* Fullscreen overlay — always in DOM, slides in/out */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__header">
          <span className="nav-logo">PORTFOLIO</span>
          <button
            className="bg-transparent border-none cursor-pointer p-1"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <IoCloseOutline className="mobile-close__icon" />
          </button>
        </div>

        <div className="mobile-menu__links">
          {NAV_LINKS.map((link) => (
            <div key={link} className="mobile-menu__item">
              <a
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="mobile-menu__link"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}