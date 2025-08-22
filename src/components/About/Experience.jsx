import { useState } from "react";

export default function Experience() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (modalId) => {
    setOpenModal(modalId);
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  return (
    <div className="experiance-contain mt-2rm">
      <div className="title-section">
        <h1 className="c-white-1">Experience</h1>
      </div>

      {/* Paskibraka */}
      <div className="paskibraka-section">
        <div className="paskib-title">
          <h3 className="c-white-1">
            Paskibraka <span className="c-white-2">(Organisasi)</span>
          </h3>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleOpen("paskib");
            }}
            className="c-white-2 hover-white a-underline"
          >
            Pasukan Pengibar Bendera Hut RI 78
            <i className="bi bi-box-arrow-up-right px-1rm" />
          </a>
        </div>
        <div className="paskib-list">
          <ul className="ml-2rm point-hover">
            <li>
              <p>
                Terpilih mewakili sekolah di tingkat kecamatan sebagai anggota
                Paskibraka, yang menunjukkan kemampuan leadership dan tanggung
                jawab yang tinggi.
              </p>
            </li>
            <li>
              <p>
                Berpartisipasi aktif dalam pelatihan intensif yang mengasah
                disiplin dan ketahanan fisik, kunci keberhasilan dalam
                menjalankan tugas.
              </p>
            </li>
            <li>
              <p>
                Berperan penting dalam upacara HUT RI ke-78 sebagai pengibar
                bendera, komitmen pada tugas yang diberikan.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Magang Inovindo */}
      <div className="magang-section pt-1rm">
        <div className="magang-title">
          <h3 className="c-white-1">
            PT. INOVINDO DIGITAL MEDIA
            <span className="c-white-2">(Magang)</span>
          </h3>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleOpen("inovindo");
            }}
            className="c-white-2 hover-white a-underline"
          >
            Web Developer Intern Bandung, 10 Sept - 11 Dec 2023
            <i className="bi bi-box-arrow-up-right px-1rm" />
          </a>
        </div>
        <div className="magang-list">
          <ul className="ml-2rm point-hover">
            <li>
              <p>
                Belajar Menyesuaikan Diri dengan Lingkungan Kerja Profesional
              </p>
            </li>
            <li>
              <p>
                Bekerja dengan target harian, belajar mengelola waktu dan
                menyelesaikan tugas tepat waktu sesuai arahan mentor.
              </p>
            </li>
            <li>
              <p>
                Mengikuti briefing pagi dan sore setiap hari, melatih
                kedisiplinan dan komunikasi internal secara konsisten.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Magang Fathforce */}
      <div className="magang-section pt-1rm">
        <div className="magang-title">
          <h3 className="c-white-1">
            PT. FATH SINERGY GROUP
            <span className="c-white-2">(Magang Online In School)</span>
          </h3>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleOpen("fathforce");
            }}
            className="c-white-2 hover-white a-underline"
          >
            UI/UX Designer Intern Bandung, 10 Sept - 11 Dec 2023
            <i className="bi bi-box-arrow-up-right px-1rm" />
          </a>
        </div>
        <div className="magang-list">
          <ul className="ml-2rm point-hover">
            <li>
              <p>
                Mendapatkan pengalaman soft skills penting seperti komunikasi
                profesional, tanggung jawab kerja, dan etika kerja industri.
              </p>
            </li>
            <li>
              <p>
                Mengembangkan kemampuan problem solving dengan menangani kendala
                teknis dan koordinasi saat pelatihan berlangsung.
              </p>
            </li>
            <li>
              <p>
                Mengembangkan kemampuan kerja tim melalui kolaborasi dengan
                berbagai pihak dalam mendukung kegiatan magang.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="modal" onClick={handleClose}>
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          {openModal === "paskib" && (
            <img
              className="modal-content"
              src="/img/fake1.png"
              alt="Paskibraka 78"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          {openModal === "inovindo" && (
            <img
              className="modal-content"
              src="/img/fake2.png"
              alt="Magang Inovindo"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          {openModal === "fathforce" && (
            <img
              className="modal-content"
              src="/img/fake1.png"
              alt="Magang Fathforce"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </div>
  );
}
