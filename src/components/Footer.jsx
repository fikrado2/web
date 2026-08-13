const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Books", href: "#books" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 16 }}>
              <img
                src="/FIKRADO-Security/logo.jpg"
                alt="FIKRADO Security logo"
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
              <span className="brand-name">
                FIKRADO <span>Security</span>
              </span>
            </div>
            <p>
              A non-profit company specializing in cybersecurity and technology
              courses. We provide high-quality security solutions and make
              security education accessible to everyone.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <p>fikrado1@gmail.com</p>
            <p>+252 63 4048063</p>
            <p>+251 984858498</p>
            <p>Masala, Hargeisa, Somaliland</p>
            <p>10th Kabele, Jijiga, Ethiopia</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {year} FIKRADO Security. All rights reserved.
          </span>
          <span>
            Built with <a href="https://react.dev">React</a> +{" "}
            <a href="https://threejs.org">Three.js</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
