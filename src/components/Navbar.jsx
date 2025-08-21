// src/components/Navbar.jsx
import { useState } from "react";
 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-containt">
        <div className="nav-logo">
          <a href="#">Manzweb.my.id</a>
        </div>

        <div className={`nav-items ${isOpen ? "active" : ""}`} id="nav-items">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/sosmed">Social Media</a></li>
            <li><a href="#contact">Contact</a></li>
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
