import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <>
      <div className="page-bg">
        <span className="matrix" aria-hidden="true" />
      </div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
