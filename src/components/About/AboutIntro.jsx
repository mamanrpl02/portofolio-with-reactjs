import { useLang } from "../../context/LangContext";

export default function AboutIntro() {
  const { lang } = useLang();

  const textEn = {
    callMe: "Call me Ma",
    highlighted: "man",
    p1: `I am a passionate 2025 vocational school graduate ready to make a
      positive impact in the digital world., collaborate, and apply my skills to innovative projects.`,
    span: ` I am eager to learn`,
    p2: `, collaborate, and apply my skills to innovative projects.`,
    linkedin: "Connect on Linkedin",
  };

  const textId = {
    callMe: "Panggil saya Ma",
    highlighted: "man",
    p1: `Saya lulusan SMK 2025 yang penuh semangat, siap memberikan
      dampak positif di dunia digital. Saya siap belajar, berkolaborasi, dan mengaplikasikan kemampuan saya pada proyek-proyek inovatif.`,
    span: ` Saya siap belajar `,
    p2: `,  dan mengaplikasikan kemampuan saya pada proyek-proyek inovatif.`,
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
          <p>{text.p1}<span>{text.span}</span>{text.p2}</p>
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
