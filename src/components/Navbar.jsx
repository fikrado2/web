import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, lang, setLang, languages } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname, lang]);

  const links = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.services, to: "/services" },
    { label: t.nav.courses, to: "/courses" },
    { label: t.nav.books, to: "/books" },
    { label: t.nav.videos, to: "/videos" },
    { label: t.nav.contact, to: "/contact" },
  ];

  return (
    <motion.header
      className={`nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container nav-inner">
        <Link className="brand" to="/">
          <Logo />
          <span className="brand-name">
            FIKRADO <span>Security</span>
          </span>
        </Link>

        <nav>
          <ul className={`nav-links ${open ? "open" : ""}`}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  end={l.to === "/"}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <div className="lang-switcher">
            {languages.map((code) => (
              <button
                key={code}
                className={`lang-btn ${lang === code ? "active" : ""}`}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>
    </motion.header>
  );
}