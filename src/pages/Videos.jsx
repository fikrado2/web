import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import PageHero from "../components/PageHero.jsx";

export default function Videos() {
  const { t } = useLanguage();
  const v = t.videos;

  return (
    <>
      <PageHero
        eyebrow={v.eyebrow}
        title={`${v.title}`}
        subtitle={v.intro}
        variant="videos"
      />

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="videos-grid">
            {v.videos.map((vid, i) => (
              <motion.div
                className="video-card"
                key={vid.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              >
                <div className="video-thumb">
                  <div className="video-play">&#9654;</div>
                  <span className="video-length">{vid.length}</span>
                </div>
                <div className="video-body">
                  <h3>{vid.title}</h3>
                  <p>{vid.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="cta-band"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2>{v.subscribeTitle}</h2>
            <p>{v.subscribeDesc}</p>
            <a
              className="btn btn-primary"
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {v.subscribeBtn}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}