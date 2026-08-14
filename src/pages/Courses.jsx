import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import PageHero from "../components/PageHero.jsx";

export default function Courses() {
  const { t } = useLanguage();
  const c = t.courses;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={`${c.title}`}
        subtitle={c.intro}
        variant="courses"
      />

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="cards">
            {c.courses.map((course, i) => (
              <motion.div
                className="card"
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              >
                <span className="book-tag">{course.tag}</span>
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <span className="meta">{course.meta}</span>
                <Link to="/contact" style={{ marginTop: "auto" }}>
                  {c.ctaBtn} &rarr;
                </Link>
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
            <h2>{c.noteTitle}</h2>
            <p>{c.noteDesc}</p>
            <Link className="btn btn-primary" to="/contact">
              {c.ctaBtn}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
