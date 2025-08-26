import { useLang } from "../../context/LangContext";

export default function AboutIntro() {
  const { lang } = useLang();

  const textEn = {
    callMe: "Call me Ma",
    highlighted: "man",
    p1: `From my internship experiences in two IT industries, I learned to build websites while `,
    span1: `sharpening my skills `,
    p2: `in teamwork, communication, and discipline. I’m also interested `,
    span2: `in AI and often use it `,
    p3: `to support productivity.`,
    linkedin: "Connect on Linkedin",
  };

  const textId = {
    callMe: "Panggil saya Ma",
    highlighted: "man",
    p1: `Dari pengalaman magang di dua industri IT, saya belajar membangun website sekaligus `,
    span1: `mengasah kemampuan `,
    p2: `kerja tim, komunikasi, dan kedisiplinan. Saat ini, saya juga tertarik `,
    span2: `pada AI dan sering `,
    p3: `memanfaatkannya untuk mendukung produktivitas.`,
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
          <p>
            {text.p1}
            <span className="c-white-1">{text.span1}</span>
            {text.p2}
            <span className="biru">{text.span2}</span>
            {text.p3}
          </p>
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
