 
export default function Intro() {
  return (
    <div className="intro" role="dialog" aria-modal="true" aria-label="Intro">
      <div className="intro__inner">
        <div className="logo"></div>
        <h1 className="title">Ciee kepo yakkk...</h1>
        <p className="subtitle">Menyiapkan pengalaman terbaik untukmu…</p>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="actions">
          <button className="btn" type="button">Lewati</button>
        </div>
      </div>
    </div>
  );
}
