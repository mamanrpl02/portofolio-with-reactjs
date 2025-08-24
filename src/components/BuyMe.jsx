import { useLang } from "../context/LangContext";

export default function BuyMe() {
  const { lang } = useLang();

  return (
    <section className="buyMe">
      <div className="content-buyMe">
        <h3>
          {lang === "en" ? "Buy me a coffee" : "Beli saya secangkir kopi"}
        </h3>
        <a
          href="https://saweria.co/abdurrahman730"
          target="_blank"
          rel="noreferrer"
        >
          {lang === "en" ? "Donate via Saweria" : "Traktir lewat Saweria"}
        </a>
      </div>
    </section>
  );
}
