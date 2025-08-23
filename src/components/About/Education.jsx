import { useLang } from "../../context/LangContext";

export default function Education() {
  const { lang } = useLang();

  const educationEn = {
    title: "Education",
    school: "SMKN (Vocational High School) 1 Pusakanagara",
    major: "Major in Software Engineering",
    grade: "Average Report Card Grade: 90/100",
    list: [
      "Completed a one-month Character Building Program in 10th grade in collaboration with the Indonesian National Armed Forces (TNI), effectively developing discipline, responsibility, and leadership skills.",
      "Elected as Class President for two consecutive years (11th and 12th grade), responsible for managing class coordination, communication with teachers, and fostering cohesion and discipline among peers.",
      "Led a team in a system development project as part of a collaboration program between the RPL (Software Engineering) department and an industry partner. Responsible for managing the team and acting as the team's representative in all interactions with the mentor.",
    ],
  };

  const educationId = {
    title: "Pendidikan",
    school: "SMKN 1 Pusakanagara",
    major: "Jurusan Rekayasa Perangkat Lunak",
    grade: "Rata-rata Nilai Raport: 90/100",
    list: [
      "Menyelesaikan Program Pembentukan Karakter selama satu bulan di kelas 10 bekerja sama dengan TNI, mengembangkan disiplin, tanggung jawab, dan kepemimpinan.",
      "Terpilih sebagai Ketua Kelas selama dua tahun berturut-turut (kelas 11 & 12), bertanggung jawab dalam koordinasi kelas, komunikasi dengan guru, serta menjaga kekompakan dan kedisiplinan teman-teman.",
      "Memimpin tim dalam proyek pengembangan sistem sebagai bagian dari program kolaborasi antara jurusan RPL dengan mitra industri. Bertanggung jawab mengatur tim dan menjadi perwakilan tim dalam setiap interaksi dengan mentor.",
    ],
  };

  const edu = lang === "en" ? educationEn : educationId;

  return (
    <div className="education-contain">
      <h1 className="c-white-1">{edu.title}</h1>
      <div className="edu-flex">
        <div className="kiri">
          <h3 className="c-white-1">{edu.school}</h3>
          <p className="jurusan">{edu.major}</p>
          <p>{edu.grade}</p>
          <ul className="point-hover">
            {edu.list.map((item, idx) => (
              <li key={idx}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
