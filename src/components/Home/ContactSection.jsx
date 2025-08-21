 
export default function ContactSection() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="c-white-2">Contact Me</h2>
        <div className="contact-info">
          <div className="input-name">
            <label htmlFor="name">Enter Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="input-email">
            <label htmlFor="email">Enter Your Email</label>
            <input type="text" id="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="input-message">
          <label htmlFor="message">Enter Your Message</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
        </div>
        <div className="input-submit">
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
