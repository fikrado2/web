import { motion } from "framer-motion";
import Scene3D from "./Scene3D.jsx";

export default function PageHero({ eyebrow, title, subtitle, variant }) {
  return (
    <section className="page-hero">
      <div style={{ position: "absolute", inset: 0, zIndex: -1, opacity: 0.8, pointerEvents: "none" }}>
        <Scene3D variant={variant} />
      </div>
      <div className="container">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
