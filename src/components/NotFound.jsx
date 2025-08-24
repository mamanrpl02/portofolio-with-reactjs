import { Link } from "react-router-dom";
import MySVG from "../assets/404.svg";
import { useLang } from "../context/LangContext";

export default function NotFound() {
  const { lang } = useLang();

  const textEn = {
    notFoundTitle: 404,
    notFoundText: "Oops! Page not found",
    notFoundSub: "It seems you're lost. Try going back to the homepage.",
    notFoundBtn: "Back to Homepage",
  };

  const textId = {
    notFoundTitle: 404,
    notFoundText: "Opps! Halaman tidak ditemukan",
    notFoundSub: "Sepertinya kamu tersesat. Coba kembali ke beranda.",
    notFoundBtn: "Kembali ke Beranda",
  };

  const text = lang === "en" ? textEn : textId;

  return (
    <div className="notfound-wrapper">
      <div className="illustration">
        <img src={MySVG} alt="Ilustrasi" />
      </div>
      <h1 className="notfound-title">{text.notFoundTitle }</h1>
      <p className="notfound-text">{ text.notFoundText}</p>
      <p className="notfound-subtext">
        {text.notFoundSub }
      </p>
      <Link to="/" className="notfound-btn">
        {text.notFoundBtn}
      </Link>
    </div>
  );
}
