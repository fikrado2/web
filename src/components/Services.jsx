import { motion } from "framer-motion";

const services = [
  {
    icon: "\U0001F6E1\uFE0F",
    title: "Penetration Testing",
    desc: "Simulated cyber-attacks to expose and fix vulnerabilities before real attackers find them.",
  },
  {
    icon: "\U0001F4A1",
    title: "Security Awareness",
    desc: "Training programs that turn every team member into the first line of defense against phishing and social engineering.",
  },
  {
    icon: "\U0001F5A5\uFE0F",
    title: "Network Defense",
    desc: "Audits, hardening, and monitoring setups that keep networks resilient against modern threats.",
  },
  {
    icon: "\U0001F393",
    title: "Tech Courses",
    desc: "Hands-on courses in cybersecurity, Linux, networking, and coding — built for real careers, not just certificates.",
  },
  {
    icon: "\U0001F50D",
    title: "Incident Response",
    desc: "Rapid detection, containment, and recovery plans so your organization stays up after an attack.",
  },
  {
    icon: "\U0001F4D7",
    title: "Digital Literacy",
    desc: "Accessible technology education for students and communities — part of our non-profit mission.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Security Services &amp; <span className="grad-text">Courses</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            High-quality security solutions combined with education — all
            driven by our non-profit mission.
          </motion.p>
        </div>

        <motion.div
          className="cards"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((s) => (
            <motion.div className="card" key={s.title} variants={item}>
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
