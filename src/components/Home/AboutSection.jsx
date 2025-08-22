export default function AboutSection({ text, link, linkLabel }) {
  return (
    <section className="section-about">
      <div className="about-container">
        <p>{text}</p>
        {link && <a href={link}>{linkLabel}</a>}
      </div>
    </section>
  );
}
