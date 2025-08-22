import { useRef } from "react"; 

export default function Hero() {
  const text =
    "Vocational High School Graduates Full of Spirit, Ready to Work and Innovate";

  const h1Ref = useRef(null);

  // Split kata dulu, lalu setiap kata di-split per 2 huruf
  const splitWords = (text) => {
    return text.split(" ").map((word, wordIndex) => {
      const pairs = [];
      for (let i = 0; i < word.length; i += 2) {
        pairs.push(word.slice(i, i + 2));
      }
      return (
        <span key={wordIndex} className="word">
          {pairs.map((pair, index) => (
            <span
              key={index}
              className="hover-pair"
              onMouseEnter={(e) => {
                if (!e.target.classList.contains("hovered")) {
                  e.target.classList.add("hovered");
                }
              }}
            >
              {pair}
            </span>
          ))}{" "}
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

        <div className="item kiri">
          <h1 ref={h1Ref}>{splitWords(text)}</h1>
          <p>
            only vocational school graduates who have a strong passion in the
            field of technology and are ready to learn and work.
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
