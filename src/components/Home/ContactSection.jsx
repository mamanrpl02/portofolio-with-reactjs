import { useState } from "react";

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

  const validateForm = (formData) => {
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      return "All fields are required. Please fill in every input.";
    }

    // Nama minimal 3 karakter, maksimal 20 karakter
    if (name.length < 3 || name.length > 20) {
      return "Name must be between 3 and 20 characters.";
    }

    // Pesan minimal 200 karakter
    if (message.length < 10) {
      return "Message must be at least 10 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    return null; // Valid
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
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setStatus("Your message has been sent successfully.");
        setIsSuccess(true);
        setShowModal(true);
        form.reset();
      } else {
        setStatus(
          "An error occurred while sending your message. Please try again."
        );
        setIsSuccess(false);
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An unexpected error occurred. Please check your connection.");
      setIsSuccess(false);
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="c-white-2">Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <div className="contact-info">
            <div className="input-name">
              <label htmlFor="name">Enter Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="input-email">
              <label htmlFor="email">Enter Your Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="input-message">
            <label htmlFor="message">Enter Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message (min 10 characters)"
              rows="6"
            ></textarea>
          </div>

          <div className="input-submit">
            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? <span className="spinner"></span> : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
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
            <h3 className="modal-title">{isSuccess ? "Success" : "Error"}</h3>
            <p className="modal-message">{status}</p>
            <button className="modal-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
