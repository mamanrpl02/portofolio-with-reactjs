import { useLang } from "../context/LangContext";

export default function Navbar() {
  const { lang, toggleLang } = useLang();

  return (
    <nav className="navbar">
      <div className="nav-containt">
        <div className="nav-logo">
          <a href="#">Manzweb.my.id</a>
        </div>

        <div className="nav-items">
          <ul>
            <li><a href="/">{lang === "en" ? "Home" : "Beranda"}</a></li>
            <li><a href="/about">{lang === "en" ? "About" : "Tentang"}</a></li>
            <li><a href="/social-media">{lang === "en" ? "Social Media" : "Sosial Media"}</a></li>
            <li><a href="/#contact">{lang === "en" ? "Contact" : "Kontak"}</a></li>
          </ul>
        </div>

        {/* ✅ Button toggle */}
        <button onClick={toggleLang} className="btn-translate">
          {lang === "en" ? "ID" : "EN"}
        </button>
      </div>
    </nav>
  );
}
