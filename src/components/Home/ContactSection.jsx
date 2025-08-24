import { useState } from "react";
import { useLang } from "../../context/LangContext"; // pastikan LangContext tersedia

export default function ContactSection() {
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setClosing(false);
    }, 400);
  };

  const { lang } = useLang();

  // Objek teks untuk translate
  const text = {
    en: {
      sectionTitle: "Contact Me",
      labelName: "Enter Your Name",
      placeholderName: "Enter your name",
      labelEmail: "Enter Your Email",
      placeholderEmail: "Enter your email",
      labelMessage: "Enter Your Message",
      placeholderMessage: "Enter your message (min 10 characters)",
      button: "Send Message",
      modalSuccess: "Success",
      modalError: "Error",
      modalClose: "Close",
    },
    id: {
      sectionTitle: "Kontak Saya",
      labelName: "Masukkan Nama Anda",
      placeholderName: "Masukkan nama Anda",
      labelEmail: "Masukkan Email Anda",
      placeholderEmail: "Masukkan email Anda",
      labelMessage: "Masukkan Pesan Anda",
      placeholderMessage: "Masukkan pesan Anda (minimal 10 karakter)",
      button: "Kirim Pesan",
      modalSuccess: "Berhasil",
      modalError: "Terjadi Kesalahan",
      modalClose: "Tutup",
    },
  };

  const t = text[lang]; // teks sesuai bahasa aktif

  const validateForm = (formData) => {
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      return lang === "en"
        ? "All fields are required. Please fill in every input."
        : "Semua kolom wajib diisi. Mohon lengkapi semua input.";
    }

    if (name.length < 3 || name.length > 20) {
      return lang === "en"
        ? "Name must be between 3 and 20 characters."
        : "Nama harus antara 3 sampai 20 karakter.";
    }

    if (message.length < 10) {
      return lang === "en"
        ? "Message must be at least 10 characters long."
        : "Pesan harus minimal 10 karakter.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return lang === "en"
        ? "Please enter a valid email address."
        : "Silakan masukkan alamat email yang valid.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    const errorMessage = validateForm(formData);
    if (errorMessage) {
      setStatus(errorMessage);
      setIsSuccess(false);
      setShowModal(true);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwP-UVaNVwUMxU7_CNAd8HdhhzHZleHrgiwXUJJeC7WoRbdM5KAAWshznM4ib3kbFfb/exec",
        { method: "POST", body: formData }
      );

      if (response.ok) {
        setStatus(
          lang === "en"
            ? "Your message has been sent successfully."
            : "Pesan Anda berhasil dikirim."
        );
        setIsSuccess(true);
        setShowModal(true);
        form.reset();
      } else {
        setStatus(
          lang === "en"
            ? "An error occurred while sending your message. Please try again."
            : "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi."
        );
        setIsSuccess(false);
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus(
        lang === "en"
          ? "An unexpected error occurred. Please check your connection."
          : "Terjadi kesalahan tak terduga. Periksa koneksi Anda."
      );
      setIsSuccess(false);
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="c-white-2">{t.sectionTitle}</h2>

        <form onSubmit={handleSubmit}>
          <div className="contact-info">
            <div className="input-name">
              <label htmlFor="name">{t.labelName}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t.placeholderName}
              />
            </div>
            <div className="input-email">
              <label htmlFor="email">{t.labelEmail}</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder={t.placeholderEmail}
              />
            </div>
          </div>

          <div className="input-message">
            <label htmlFor="message">{t.labelMessage}</label>
            <textarea
              id="message"
              name="message"
              placeholder={t.placeholderMessage}
              rows="6"
            ></textarea>
          </div>

          <div className="input-submit">
            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? <span className="spinner"></span> : t.button}
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div
          className={`modal-overlay ${closing ? "fade-out" : "fade-in"}`}
          onClick={closeModal}
        >
          <div
            className={`modal-card ${closing ? "closing" : "open"} ${
              isSuccess ? "modal-success" : "modal-error"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="modal-title">
              {isSuccess ? t.modalSuccess : t.modalError}
            </h3>
            <p className="modal-message">{status}</p>
            <button className="modal-button" onClick={closeModal}>
              {t.modalClose}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
