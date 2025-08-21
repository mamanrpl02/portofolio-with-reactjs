import { useState } from "react";
import "../../styles/about.css";

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos quisquam deleniti harum?
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus, ad.
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus possimus tempore dignissimos est aliquid?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos quisquam deleniti harum?
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                animi excepturi? Repellat, iste.
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                quibusdam distinctio nobis, suscipit beatae in.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos quisquam deleniti harum?
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                animi excepturi? Repellat, iste.
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                quibusdam distinctio nobis, suscipit beatae in.
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
