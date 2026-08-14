import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import PageHero from "../components/PageHero.jsx";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <PageHero
        eyebrow={a.eyebrow}
        title={`${a.title}`}
        subtitle={a.intro}
        variant="about"
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <motion.div
            className="mission-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mission-box">
              <h3>
                <span className="grad-text">{a.missionTitle}</span>
              </h3>
              <p>{a.mission}</p>
            </div>
            <div className="mission-box">
              <h3>
                <span className="grad-text">{a.visionTitle}</span>
              </h3>
              <p>{a.vision}</p>
            </div>
          </motion.div>

          <div className="section-head" style={{ marginTop: 90 }}>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              FIKRADO
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="grad-text">{a.valuesTitle}</span>
            </motion.h2>
          </div>

          <div className="values-grid">
            {a.values.map((v, i) => (
              <motion.div
                className="value"
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="card-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="section-head" style={{ marginTop: 90 }}>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="grad-text">{a.officesTitle}</span>
            </motion.h2>
          </div>

          <div className="offices-grid">
            {a.offices.map((o, i) => (
              <motion.div
                className="office"
                key={o.city}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <b>{o.city}</b>
                <span>{o.detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
