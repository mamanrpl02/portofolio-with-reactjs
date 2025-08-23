import { useLang } from "../../context/LangContext";

export default function Skills() {
  const { lang } = useLang();

  // --- English Version ---
  const skillsEn = {
    hardTitle: "Hard Skills",
    hard: {
      languageLabel: "Language",
      frameworkLabel: "Framework",
      databaseLabel: "Database",
      toolsLabel: "Familiar Tools",
      language: "Proficient in PHP, HTML/CSS, JavaScript",
      framework: "Laravel, Bootstrap, Tailwind, React.js",
      database: "MySQL",
      tools: "VS Code, Git, Laragon, XAMPP, Figma, Canva, Ms. Office",
    }, 
  };

  // --- Indonesian Version ---
  const skillsId = {
    hardTitle: "Keterampilan Teknis",
    hard: {
      languageLabel: "Bahasa Pemrograman",
      frameworkLabel: "Framework",
      databaseLabel: "Basis Data",
      toolsLabel: "Alat yang Dikuasai",
      language: "Menguasai PHP, HTML/CSS, JavaScript",
      framework: "Laravel, Bootstrap, Tailwind, React.js",
      database: "MySQL",
      tools: "VS Code, Git, Laragon, XAMPP, Figma, Canva, Ms. Office",
    }, 
  };

  const skills = lang === "en" ? skillsEn : skillsId;

  return (
    <div className="hardskil-contain mt-2rm">
      <h1 className="c-white-1">{skills.hardTitle}</h1>
      <p className="language hover-biru">
        {skills.hard.languageLabel} :{" "}
        <span className="c-white-1 fw-600">{skills.hard.language}</span>
      </p>
      <p className="framework hover-biru">
        {skills.hard.frameworkLabel} :{" "}
        <span className="c-white-1 fw-600">{skills.hard.framework}</span>
      </p>
      <p className="database hover-biru">
        {skills.hard.databaseLabel} :{" "}
        <span className="c-white-1 fw-600">{skills.hard.database}</span>
      </p>
      <p className="familiar-tools hover-biru">
        {skills.hard.toolsLabel} :{" "}
        <span className="c-white-1 fw-600">{skills.hard.tools}</span>
      </p>
 
    </div>
  );
}
