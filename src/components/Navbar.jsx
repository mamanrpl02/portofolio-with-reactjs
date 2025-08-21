// Navbar.jsx
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const goToContact = () => {
    if (location.pathname === "/") {
      // kalau lagi di Home, scroll langsung
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // kalau di luar Home, redirect ke Home dengan state
      navigate("/", { state: { scrollTo: "contact" } });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-containt">
        <div className="nav-logo">
          <a href="#">Manzweb.my.id</a>
        </div>

        <div className={`nav-items ${isOpen ? "active" : ""}`} id="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/social-media">Social Media</Link>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault(); // cegah reload bawaan <a>
                  goToContact(); // pakai fungsi tadi
                }}
                className="cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="menu" onClick={toggleMenu}>
          <span className="material-symbols-outlined">
            {isOpen ? "close" : "menu"}
          </span>
        </div>
      </div>
    </nav>
  );
}
