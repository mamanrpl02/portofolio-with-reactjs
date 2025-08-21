export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container-hero">
        {/* ✅ perbaikan nama class */}
        <div className="profile-mobile">
          <img src="/img/profile-mobile.png" alt="manzweb" />
          <div className="status">
            <span className="animasi-lingkaran" />
            <p>Available for work</p>
          </div>
        </div>

        <div className="item kiri">
          <h1>Passionate Junior Developer,</h1>
          <p>
            As a Vocational High School graduate, I have a strong foundation in
            technology
          </p>
        </div>

        <div className="item kanan profile-frame">
          <img
            src="/img/hero2.png"
            alt="manz-web-image"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
}
