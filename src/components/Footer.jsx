import { FiCornerRightUp } from "react-icons/fi";
import { useLang } from "../context/LangContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const { lang } = useLang();

  const textEn = {
    copyr: "All rights reserved.",
    link: "Back To Top",
  };

  const textId = {
    copyr: "Semua hak dilindungi undang-undang.",
    link: "Kembali Ke Atas",
  };

  const text = lang === "en" ? textEn : textId;

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {currentYear} manzweb. {text.copyr}
        </p>
        <div className="footer-links">
          <a href="#"></a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          > 
            {text.link}
            <FiCornerRightUp size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}
