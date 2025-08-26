import { useState } from "react";
import { useLang } from "../../context/LangContext";

export default function Experience() {
  const { lang } = useLang();
  const [openModal, setOpenModal] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [closing, setClosing] = useState(false); // 👉 tambahan

  const handleOpen = (modalId, index = 0) => {
    setOpenModal(modalId);
    setCurrentImgIndex(index);
    setClosing(false);
  };

  const handleClose = () => {
    setClosing(true); // jalankan animasi keluar
    setTimeout(() => {
      setOpenModal(null);
      setClosing(false);
    }, 300); // 300ms sesuai durasi animasi CSS
  };

  // contoh data, yang penting `img` array
  const experiencesEn = [
    {
      id: "paskib",
      title: "Paskibraka",
      subtitle: "(Organization)",
      linkText: "Flag Hoisting Troop for the 78th Indonesian Independence Day",
      img: ["/img/fake1.png"],
      alt: "Paskibraka 78",
      list: [
        "Selected to represent the school at the district level as a member of Paskibraka, demonstrating strong leadership and responsibility.",
        "Actively participated in intensive training that enhanced discipline and physical endurance, essential for successfully carrying out duties.",
        "Played a vital role in the 78th Independence Day ceremony as a flag hoister, showing full commitment to the assigned task.",
      ],
    },
    {
      id: "inovindo",
      title: "PT. INOVINDO DIGITAL MEDIA",
      subtitle: "(Internship)",
      linkText: "Web Developer Intern, Bandung, Sept 10 - Dec 11, 2023",
      img: ["/img/fake2.png"],
      alt: "Inovindo Internship",
      list: [
        "Learned how to adapt to a professional work environment.",
        "Work with task-based targets, learn to manage time, and complete tasks on time as specified",
        "Attended daily morning and evening briefings, fostering discipline and consistent internal communication.",
      ],
    },
    {
      id: "fathforce",
      title: "PT. FATH SINERGY GROUP",
      subtitle: "(Online Internship at School)",
      linkText: "UI/UX Designer Intern, Bandung, Sept 10 - Dec 11, 2023",
      img: ["/img/fake1.png"],
      alt: "Fathforce Internship",
      list: [
        "Gained essential soft skills such as professional communication, work responsibility, and industry work ethics.",
        "Enhanced problem-solving skills by addressing technical challenges and coordination issues during the program.",
        "Improved teamwork skills through collaboration with various parties in supporting the internship activities.",
      ],
    },
    {
      id: "panitia-lomba-hut-ri-80",
      title: "Independence Day Committee",
      subtitle: "(Organization)",
      linkText:
        "17th August Celebration Committee (80th Independence Day), Village Pusakaratu RT(09)",
      img: ["/img/fake1.png"],
      alt: "80th Independence Day Celebration",
      list: [
        "Contributed to the event and logistics division, supporting the smooth execution of the entire program.",
        "Involved in coordinating and managing various competitions, from preparation to the closing ceremony.",
        "Developed teamwork and communication skills through collaboration with fellow committee members and participants.",
        "Ensured the availability of equipment and supplies on time, preventing disruptions during the activities.",
        "Played a role in creating a festive, well-organized, and engaging celebration atmosphere for the community.",
      ],
    },
  ];

  // --- Data pengalaman bahasa Indonesia ---
  const experiencesId = [
    {
      id: "paskib",
      title: "Paskibraka",
      subtitle: "(Organisasi)",
      linkText: "Pasukan Pengibar Bendera Hut RI 78",
      img: ["/img/fake1.png"],
      alt: "Paskibraka 78",
      list: [
        "Terpilih mewakili sekolah di tingkat kecamatan sebagai anggota Paskibraka, yang menunjukkan kemampuan leadership dan tanggung jawab yang tinggi.",
        "Berpartisipasi aktif dalam pelatihan intensif yang mengasah disiplin dan ketahanan fisik, kunci keberhasilan dalam menjalankan tugas.",
        "Berperan penting dalam upacara HUT RI ke-78 sebagai pengibar bendera, komitmen pada tugas yang diberikan.",
      ],
    },
    {
      id: "inovindo",
      title: "PT. INOVINDO DIGITAL MEDIA",
      subtitle: "(Magang)",
      linkText: "Web Developer Intern Bandung, 10 Sept - 11 Dec 2023",
      img: ["/img/fake2.png"],
      alt: "Magang Inovindo",
      list: [
        "Belajar menyesuaikan diri dengan lingkungan kerja profesional.",
        "Bekerja dengan target berbasis tugas, belajar mengelola waktu, dan menyelesaikan tugas tepat waktu sesuai yang ditentuka",
        "Mengikuti briefing pagi dan sore setiap hari, melatih kedisiplinan dan komunikasi internal secara konsisten.",
      ],
    },
    {
      id: "fathforce",
      title: "PT. FATH SINERGY GROUP",
      subtitle: "(Magang Online In School)",
      linkText: "UI/UX Designer Intern Bandung, 10 Sept - 11 Dec 2023",
      img: ["/img/fake1.png"],
      alt: "Magang Fathforce",
      list: [
        "Mendapatkan pengalaman soft skills penting seperti komunikasi profesional, tanggung jawab kerja, dan etika kerja industri.",
        "Mengembangkan kemampuan problem solving dengan menangani kendala teknis dan koordinasi saat pelatihan berlangsung.",
        "Mengembangkan kemampuan kerja tim melalui kolaborasi dengan berbagai pihak dalam mendukung kegiatan magang.",
      ],
    },
    {
      id: "panitia-lomba-hut-ri-80",
      title: "Panitia Lomba 17 Agustus",
      subtitle: "(Organisasi)",
      linkText:
        "Panitia Lomba 17 Agustus (HUT RI ke-80), Desa Pusakaratu RT(09)",
      img: ["/img/fake1.png"],
      alt: "Kegiatan Lomba HUT RI ke-80",
      list: [
        "Berperan dalam seksi acara dan perlengkapan untuk mendukung jalannya seluruh kegiatan.",
        "Terlibat dalam koordinasi serta pelaksanaan berbagai lomba, mulai dari persiapan hingga penutupan acara.",
        "Mengasah keterampilan teamwork dan komunikasi melalui kerja sama dengan panitia serta peserta.",
        "Mendukung ketersediaan perlengkapan tepat waktu sehingga kegiatan berlangsung lancar tanpa hambatan.",
        "Berpartisipasi dalam menciptakan suasana perayaan yang meriah, kondusif, dan penuh kebersamaan.",
      ],
    },
  ];

  const experiences = lang === "en" ? experiencesEn : experiencesId;

  return (
    <div className="experiance-contain mt-2rm">
      <div className="title-section">
        <h1 className="c-white-1">Pengalaman</h1>
      </div>

      {experiences.map((exp) => (
        <div key={exp.id} className="experience-section pt-1rm">
          <div className="experience-title">
            <h3 className="c-white-1">
              {exp.title} <span className="c-white-2">{exp.subtitle}</span>
            </h3>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleOpen(exp.id, 0);
              }}
              className="c-white-2 hover-white a-underline"
            >
              {exp.linkText}
              <i className="bi bi-box-arrow-up-right px-1rm" />
            </a>
          </div>
          <div className="experience-list">
            <ul className="ml-2rm point-hover">
              {exp.list.map((item, idx) => (
                <li key={idx}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      {/* Modal */}
      {openModal && (
        <div
          className={`modal ${closing ? "fade-out" : "fade-in"}`}
          onClick={handleClose}
        >
          {experiences
            .filter((exp) => exp.id === openModal)
            .map((exp) => (
              <div
                key={exp.id}
                className={`modal-inner ${closing ? "zoom-out" : "zoom-in"}`}
              >
                <span className="close" onClick={handleClose}>
                  &times;
                </span>
                <img
                  key={currentImgIndex}
                  className="modal-content"
                  src={exp.img[currentImgIndex]}
                  alt={exp.alt}
                />
                <div className="thumbnails">
                  {exp.img.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`thumb-${idx}`}
                      className={`thumb ${
                        currentImgIndex === idx ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImgIndex(idx);
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
