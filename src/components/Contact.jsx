import { motion } from "framer-motion";

const rows = [
  {
    icon: "\u2709\uFE0F",
    label: "Email",
    value: "fikrado1@gmail.com",
    href: "mailto:fikrado1@gmail.com",
  },
  {
    icon: "\U0001F4DE",
    label: "Phone (Somaliland)",
    value: "+252 63 4048063",
    href: "tel:+252634048063",
  },
  {
    icon: "\U0001F4DE",
    label: "Phone (Ethiopia)",
    value: "+251 984858498",
    href: "tel:+251984858498",
  },
  {
    icon: "\U0001F4CD",
    label: "Hargeisa Office",
    value: "Masala, Hargeisa, Somaliland",
  },
  {
    icon: "\U0001F4CD",
    label: "Jijiga Office",
    value: "10th Kabele, Jijiga, Ethiopia",
  },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nMessage: ${data.get("message")}`;
    window.location.href = `mailto:fikrado1@gmail.com?subject=Website%20Inquiry&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contact <span className="grad-text">Us</span>
          </motion.h2>
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {rows.map((r, i) => (
              <motion.div
                className="contact-row"
                key={r.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="contact-ico">{r.icon}</div>
                <div>
                  <div className="label">{r.label}</div>
                  {r.href ? (
                    <a href={r.href}>{r.value}</a>
                  ) : (
                    <span>{r.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>Send a message</h3>
            <input name="name" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Your email" required />
            <textarea name="message" placeholder="How can we help?" required />
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
