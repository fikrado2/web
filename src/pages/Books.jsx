import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import PageHero from "../components/PageHero.jsx";

export default function Books() {
  const { t } = useLanguage();
  const b = t.books;

  return (
    <>
      <PageHero
        eyebrow={b.eyebrow}
        title={`${b.title}`}
        subtitle={b.intro}
        variant="books"
      />

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="books-grid">
            {b.books.map((book, i) => (
              <motion.article
                className="book"
                key={book.title}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              >
                <span className="book-tag">{book.tag}</span>
                <h3>{book.title}</h3>
                <p>{book.desc}</p>
                <span className="meta">{book.pages}</span>
                <Link to="/contact">{b.ctaBtn} &rarr;</Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}