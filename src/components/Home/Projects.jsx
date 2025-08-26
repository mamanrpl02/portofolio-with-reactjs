import { useLang } from "../../context/LangContext";

export default function Projects() {
  const { lang } = useLang(); // ambil bahasa saat ini

  const projectList = [
    {
      title: "SIMKU",
      information: {
        en: "Team project during the Final Year Summative Assessment, developing a class financial management web application for savings and class funds, refined with an attendance system to replace manual record-keep",
        id: "Proyek tim selama Penilaian Sumatif Tahun Akhir, mengembangkan aplikasi web manajemen keuangan kelas untuk tabungan dan uang kas, disempurnakan dengan sistem kehadiran untuk menggantikan pencatatan manual",
      },
      type: { en: "Web", id: "Web" },
      typeInform: { en: "Web Management", id: "Manajemen Web" },
      tech: { en: "Laravel", id: "Laravel" },
      techInform: { en: "Tech", id: "Teknologi" },
      gambar: "project-simku.png",
    },
    {
      title: "TertibSMK",
      information: {
        en: "A personal project in designing a web app for a plan to create a system for a school",
        id: "Proyek pribadi dalam merancang aplikasi web untuk rencana membuat sistem di sekolah",
      },
      type: { en: "UI/UX", id: "UI/UX" },
      typeInform: { en: "Web Design", id: "Desain Web" },
      tech: { en: "Laravel", id: "Laravel" },
      techInform: { en: "Tech", id: "Teknologi" },
      gambar: "desainweb-tertibsiswa.png",
    },
  ];

  return (
    <section id="project">
      <h2 className="judul">{lang === "en" ? "My Projects" : "Proyek Saya"}</h2>
      <div className="project-container">
        {projectList.map((p, i) => (
          <div key={i} className="project-card">
            <img
              src={`/img/${p.gambar}`}
              alt={`${p.title}-image`}
              className="project-image"
            />
            <div className="content-project">
              <h3 className="c-white-1">{p.title}</h3>
              <p>{p.information[lang]}</p>
              <div className="desk-project">
                <div className="type item">
                  <h4>{p.type[lang]}</h4>
                  <p>{p.typeInform[lang]}</p>
                </div>
                <div className="tech item">
                  <h4>{p.tech[lang]}</h4>
                  <p>{p.techInform[lang]}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
