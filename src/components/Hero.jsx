import { motion } from "framer-motion";
import Scene3D from "./Scene3D.jsx";

const stats = [
  { value: "100%", label: "Non-Profit" },
  { value: "24/7", label: "Security Support" },
  { value: "500+", label: "Students Trained" },
  { value: "2", label: "Countries Served" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-canvas">
        <Scene3D />
      </div>

      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="eyebrow">Cybersecurity &amp; Technology Courses</span>
          <h1>
            Securing <span className="grad-text">Digital Futures</span>,
            <br /> Teaching Real Skills
          </h1>
          <p>
            FIKRADO Security is a non-profit company specializing in
            cybersecurity and technology courses. We provide high-quality
            security solutions and accessible education across the Horn of
            Africa.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#services">
              Explore Services
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact Us
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((s, i) => (
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
          className="hero-side"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.img
            src="/FIKRADO-Security/logo.jpg"
            alt="FIKRADO Security"
            style={{
              width: "min(320px, 70%)",
              display: "block",
              margin: "0 auto",
              borderRadius: 28,
              border: "1px solid rgba(34,211,238,0.4)",
              boxShadow: "0 0 60px rgba(34,211,238,0.35)",
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
