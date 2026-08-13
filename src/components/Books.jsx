import { motion } from "framer-motion";

const books = [
  {
    tag: "Beginner",
    title: "Cybersecurity Fundamentals",
    desc: "A plain-language introduction to threats, defenses, and how the internet actually stays secure.",
    link: "#contact",
  },
  {
    tag: "Hands-On",
    title: "Linux & Networking Basics",
    desc: "Practical labs and exercises to master the operating system and protocols behind every career in tech.",
    link: "#contact",
  },
  {
    tag: "Practical",
    title: "Ethical Hacking Guide",
    desc: "Learn how attackers think so you can defend better — with legal, responsible testing techniques.",
    link: "#contact",
  },
];

export default function Books() {
  return (
    <section className="section" id="books">
      <div className="container">
        <div className="section-head">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Learning Resources
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured <span className="grad-text">Books</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our learning material is designed to be accessible, practical, and
            free for students in need.
          </motion.p>
        </div>

        <div className="books-grid">
          {books.map((b, i) => (
            <motion.article
              className="book"
              key={b.title}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <span className="book-tag">{b.tag}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
              <a href={b.link}>Get a copy &rarr;</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
