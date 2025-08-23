import { useRef, useEffect } from "react";

export default function Hero() {
  const text = "From SMK to Be a Web Dev ";

  const h1Ref = useRef(null);

  // Ambil data dari sessionStorage (array index pair yang sudah di-hover)
  const getHoveredPairs = () => {
    const saved = sessionStorage.getItem("hoveredPairs");
    return saved ? JSON.parse(saved) : [];
  };

  // Simpan data ke sessionStorage
  const saveHoveredPair = (id) => {
    const current = getHoveredPairs();
    if (!current.includes(id)) {
      const updated = [...current, id];
      sessionStorage.setItem("hoveredPairs", JSON.stringify(updated));
    }
  };

  // Pas pertama render, cek dan apply class hovered
  useEffect(() => {
    const saved = getHoveredPairs();
    saved.forEach((id) => {
      const el = document.querySelector(`[data-id='${id}']`);
      if (el) el.classList.add("hovered");
    });
  }, []);

  // Split kata jadi pasangan 2 huruf
  const splitWords = (text) => {
    return text.split(" ").map((word, wordIndex) => {
      const pairs = [];
      for (let i = 0; i < word.length; i += 2) {
        pairs.push(word.slice(i, i + 2));
      }
      return (
        <span key={wordIndex} className="word">
          {pairs.map((pair, index) => {
            const id = `${wordIndex}-${index}`;
            return (
              <span
                key={id}
                data-id={id}
                className="hover-pair"
                onMouseEnter={(e) => {
                  if (!e.target.classList.contains("hovered")) {
                    e.target.classList.add("hovered");
                    saveHoveredPair(id);
                  }
                }}
              >
                {pair}
              </span>
            );
          })}{" "}
        </span>
      );
    });
  };

  return (
    <section id="hero" className="hero">
      <div className="container-hero">
        <div className="profile-mobile">
          <img src="/img/profile-mobile.png" alt="manzweb" />
          <div className="status">
            <span className="animasi-lingkaran" />
            <p>Available for work</p>
          </div>
        </div>

        <div className="kiri">
          <h1 ref={h1Ref}>{splitWords(text)}</h1>
          <p>
            I keep learning and building small projects to grow into a
            professional Web Developer.
          </p>
        </div>

        <div className="kanan profile-frame">
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
