import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import Scene3D from "../components/Scene3D.jsx";
import Logo from "../components/Logo.jsx";

export default function Home() {
  const { t } = useLanguage();
  const home = t.home;

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="eyebrow">
              <span className="logo-badge" style={{ width: 20, height: 20 }}>
                <span className="status-dot" />
              </span>
              {home.eyebrow}
            </span>
            <h1>
              {home.title1} <br />
              <span className="grad-text grad-text-glow">{home.title2}</span>
            </h1>
            <p>{home.subtitle}</p>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/services">
                {home.cta1}
              </Link>
              <Link className="btn btn-ghost" to="/courses">
                {home.cta2}
              </Link>
            </div>

            <div className="hero-stats">
              {home.stats.map((s, i) => (
                <motion.div
                  className="stat"
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                >
                  <b>{s.value}</b>
                  <small>{s.label}</small>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-side hero-3d"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="hero-3d-frame">
              <div className="hero-3d-canvas">
                <Scene3D variant="home" />
              </div>
              <span className="hero-3d-badge">
                <Logo size={24} />
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {t.services.eyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {home.servicesTitle}{" "}
              <span className="grad-text">{t.nav.services}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {home.servicesDesc}
            </motion.p>
          </div>

          <div className="cards">
            {t.services.services.slice(0, 3).map((s, i) => (
              <motion.div
                className="card"
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link className="btn btn-ghost" to="/services">
              {home.servicesMore} &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {t.books.eyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {home.booksTitle} <span className="grad-text">{t.nav.books}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {home.booksDesc}
            </motion.p>
          </div>

          <div className="books-grid">
            {t.books.books.slice(0, 4).map((b, i) => (
              <motion.article
                className="book"
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="book-tag">{b.tag}</span>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                <span className="meta">{b.pages}</span>
                <Link to="/books">{t.common.learnMore} &rarr;</Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="cta-band"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2>{home.ctaTitle}</h2>
            <p>{home.ctaDesc}</p>
            <Link className="btn btn-primary" to="/contact">
              {home.ctaBtn}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
