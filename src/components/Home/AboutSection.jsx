import { Link } from "react-router-dom";

export default function AboutSection({ text, link, linkLabel }) {
  return (
    <section className="section-about">
      <div className="about-container">
        <p>{text}</p>
        {link && <Link to={link}>{linkLabel}</Link>}
      </div>
    </section>
  );
}
