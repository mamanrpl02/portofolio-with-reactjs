import { useLang } from "../../context/LangContext";

export default function AboutIntro() {
  const { lang } = useLang();

  const textEn = {
    callMe: "Call me Ma",
    highlighted: "man",
    paragraph: `I am a passionate 2025 vocational school graduate ready to make a
      positive impact in the digital world. I am eager to learn, collaborate, and apply my skills to innovative projects.`,
    linkedin: "Connect on Linkedin",
  };

  const textId = {
    callMe: "Panggil saya Ma",
    highlighted: "man",
    paragraph: `Saya lulusan SMK 2025 yang penuh semangat, siap memberikan
      dampak positif di dunia digital. Saya ingin belajar, berkolaborasi, dan mengaplikasikan kemampuan saya pada proyek-proyek inovatif.`,
    linkedin: "Terhubung di Linkedin",
  };

  const text = lang === "en" ? textEn : textId;

  return (
    <section id="about">
      <div className="contain-about">
        <h1>
          {text.callMe}
          <span>{text.highlighted}</span>
        </h1>
        <div className="paragraft">
          <p>{text.paragraph}</p>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/abdurrahman-hidayat-581265293/"
        >
          {text.linkedin}
        </a>
      </div>
    </section>
  );
}
