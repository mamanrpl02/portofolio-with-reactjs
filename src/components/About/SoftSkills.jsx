import { useLang } from "../../context/LangContext";

export default function SoftSkills() {
  const { lang } = useLang();

  const textEn = {
    title: "Soft Skills",
    infor:
      "Communication, Teamwork, Problem Solving, Discipline, Time Management.",
  };

  const textId = {
    title: "Keterampilan Lunak",
    infor:
      "Komunikasi, Kerja Tim, Pemecahan Masalah, Disiplin, Manajemen Waktu.",
  };

  const text = lang === "en" ? textEn : textId;

  return (
    <div className="softskill-contain mt-2rm">
      <h1 className="c-white-1">{text.title}</h1>
      <p>{text.infor}</p>
    </div>
  );
}
