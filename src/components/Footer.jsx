import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import Logo from "./Logo.jsx";

export default function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.services, to: "/services" },
    { label: t.nav.courses, to: "/courses" },
    { label: t.nav.books, to: "/books" },
    { label: t.nav.videos, to: "/videos" },
    { label: t.nav.contact, to: "/contact" },
  ];

  const contactLines =
    lang === "am"
      ? [
          "fikrado1@gmail.com",
          "+252 63 4048063",
          "+251 984858498",
          "ማስላ፣ ሐርጌሳ፣ ሶማሊላንድ",
          "10ኛ ካበለ፣ ጅጅጋ፣ ኢትዮጵያ",
        ]
      : lang === "so"
        ? [
            "fikrado1@gmail.com",
            "+252 63 4048063",
            "+251 984858498",
            "Masala, Hargeysa, Somaliland",
            "Kabele 10aad, Jijiga, Itoobiya",
          ]
        : [
            "fikrado1@gmail.com",
            "+252 63 4048063",
            "+251 984858498",
            "Masala, Hargeisa, Somaliland",
            "10th Kabele, Jijiga, Ethiopia",
          ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 16 }}>
              <Logo size={40} />
              <span className="brand-name">
                FIKRADO <span>Security</span>
              </span>
            </div>
            <p>{t.footer.tagline}</p>
          </div>

          <div>
            <h4>{t.footer.quickLinks}</h4>
            <ul className="footer-links">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t.footer.contactUs}</h4>
            {contactLines.map((c, i) => (
              <p key={i}>{c}</p>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} FIKRADO Security. {t.footer.rights}</span>
          <span>
            {t.footer.builtWith} <a href="https://react.dev">React</a> +{" "}
            <a href="https://threejs.org">Three.js</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
