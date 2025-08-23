import { useState } from "react";

export default function Experience() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (modalId) => setOpenModal(modalId);
  const handleClose = () => setOpenModal(null);

  // --- Data pengalaman dipisah ---

  const experiences = [
  {
    id: "paskib",
    title: "Paskibraka",
    subtitle: "(Organization)",
    linkText: "Flag Hoisting Troop for the 78th Indonesian Independence Day",
    img: "/img/fake1.png",
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
    img: "/img/fake2.png",
    alt: "Inovindo Internship",
    list: [
      "Learned how to adapt to a professional work environment.",
      "Worked with daily targets, learning time management and completing tasks on schedule under mentor guidance.",
      "Attended daily morning and evening briefings, fostering discipline and consistent internal communication.",
    ],
  },
  {
    id: "fathforce",
    title: "PT. FATH SINERGY GROUP",
    subtitle: "(Online Internship at School)",
    linkText: "UI/UX Designer Intern, Bandung, Sept 10 - Dec 11, 2023",
    img: "/img/fake1.png",
    alt: "Fathforce Internship",
    list: [
      "Gained essential soft skills such as professional communication, work responsibility, and industry work ethics.",
      "Enhanced problem-solving skills by addressing technical challenges and coordination issues during the program.",
      "Improved teamwork skills through collaboration with various parties in supporting the internship activities.",
    ],
  },
];


  const experiencesEng = [
    {
      id: "paskib",
      title: "Paskibraka",
      subtitle: "(Organisasi)",
      linkText: "Pasukan Pengibar Bendera Hut RI 78",
      img: "/img/fake1.png",
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
      img: "/img/fake2.png",
      alt: "Magang Inovindo",
      list: [
        "Belajar Menyesuaikan Diri dengan Lingkungan Kerja Profesional",
        "Bekerja dengan target harian, belajar mengelola waktu dan menyelesaikan tugas tepat waktu sesuai arahan mentor.",
        "Mengikuti briefing pagi dan sore setiap hari, melatih kedisiplinan dan komunikasi internal secara konsisten.",
      ],
    },
    {
      id: "fathforce",
      title: "PT. FATH SINERGY GROUP",
      subtitle: "(Magang Online In School)",
      linkText: "UI/UX Designer Intern Bandung, 10 Sept - 11 Dec 2023",
      img: "/img/fake1.png",
      alt: "Magang Fathforce",
      list: [
        "Mendapatkan pengalaman soft skills penting seperti komunikasi profesional, tanggung jawab kerja, dan etika kerja industri.",
        "Mengembangkan kemampuan problem solving dengan menangani kendala teknis dan koordinasi saat pelatihan berlangsung.",
        "Mengembangkan kemampuan kerja tim melalui kolaborasi dengan berbagai pihak dalam mendukung kegiatan magang.",
      ],
    },
  ];

  return (
    <div className="experiance-contain mt-2rm">
      <div className="title-section">
        <h1 className="c-white-1">Experience</h1>
      </div>

      {/* Loop pengalaman */}
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
                handleOpen(exp.id);
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
        <div className="modal" onClick={handleClose}>
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          {experiences
            .filter((exp) => exp.id === openModal)
            .map((exp) => (
              <img
                key={exp.id}
                className="modal-content"
                src={exp.img}
                alt={exp.alt}
                onClick={(e) => e.stopPropagation()}
              />
            ))}
        </div>
      )}
    </div>
  );
}
