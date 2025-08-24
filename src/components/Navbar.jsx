import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  const overlayRef = useRef(null);
  const textRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Fungsi scroll ke contact
  const goToContact = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "contact" } });
    }
  };

  const handleTranslateClick = (e) => {
    const overlay = overlayRef.current;
    const text = textRef.current;
    const button = e.target.getBoundingClientRect();

    const x = button.left + button.width / 2;
    const y = button.top + button.height / 2;

    // Overlay awal
    gsap.set(overlay, {
      top: y,
      left: x,
      scale: 0,
      opacity: 1,
      visibility: "visible",
      background: "radial-gradient(circle, #0f172a, #1e293b)",
      boxShadow: "0 0 20px #3b82f6, 0 0 40px #6366f1",
      borderRadius: "50%",
      position: "fixed",
      width: 100,
      height: 100,
      pointerEvents: "none",
      zIndex: 3000,
      transform: "translate(-50%, -50%)",
    });

    // Text awal
    text.innerText = lang === "en" ? "Bahasa Indonesia" : "Language English";
    gsap.set(text, {
      opacity: 0,
      scale: 2,
      y: 20,
      visibility: "visible",
      position: "fixed",
      top: y,
      left: x,
      transform: "translate(-50%, -50%)",
      color: "#fff",
      fontSize: "1.2rem",
      fontWeight: "600",
      zIndex: 3001,
      pointerEvents: "none",
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        toggleLang(); // ganti bahasa
        gsap.to([overlay, text], {
          opacity: 0,
          duration: 0.8,
          onComplete: () => {
            overlay.style.visibility = "hidden";
            text.style.visibility = "hidden";
          },
        });
      },
    });

    // Timeline animasi:
    // 1. Expand overlay besar
    // 2. Text muncul
    // 3. Overlay kembali ke tombol
    tl.to(overlay, { scale: 50, duration: 1.5 })
      .to(text, { opacity: 1, scale: 1, y: 0, duration: 0.8 }, "-=1")
      .to(
        overlay,
        { scale: 0, top: y, left: x, duration: 0.8, ease: "power2.inOut" },
        "+=0.3"
      )
      .to(text, { opacity: 0, scale: 0.5, duration: 0.5 }, "-=0.6");
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-containt">
          <div className="nav-logo">
            <a href="#">Manzweb.my.id</a>
          </div>

          <div className={`nav-items ${isOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/">{lang === "en" ? "Home" : "Beranda"}</Link>
              </li>
              <li>
                <Link to="/about">{lang === "en" ? "About" : "Tentang"}</Link>
              </li>
              <li>
                <Link to="/social-media">
                  {lang === "en" ? "Social Media" : "Sosial Media"}
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    goToContact();
                  }}
                >
                  {lang === "en" ? "Contact" : "Kontak"}
                </a>
              </li>
              <li>
                {/* Button translate */}
                <button
                  onClick={handleTranslateClick}
                  className="btn-translate"
                >
                  {lang === "en" ? "ID" : "EN"}
                </button>
              </li>
            </ul>
          </div>

          {/* Hamburger menu */}
          <div className="menu" onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </div>
        </div>
      </nav>

      {/* overlay lingkaran splash */}
      <div className="overlay-splash" ref={overlayRef}></div>
      <div className="overlay-text" ref={textRef}></div>
      {/* overlay hitam untuk menu */}
      <div
        className={`menu-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}
