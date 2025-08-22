import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // ✅ icon react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const goToContact = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "contact" } });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-containt">
        <div className="nav-logo">
          <a href="#" className="hover-white">Manzweb.my.id</a>
        </div>

        <div className={`nav-items ${isOpen ? "active" : ""}`} id="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/social-media">Social Media</Link></li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  goToContact();
                }}
                className="cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* ✅ icon pakai react-icons */}
        <div className="menu" onClick={toggleMenu} style={{ cursor: "pointer" }}>
          {isOpen ? <FiX size={28} color="white" /> : <FiMenu size={28} color="white" />}
        </div>
      </div>
    </nav>
  );
}
