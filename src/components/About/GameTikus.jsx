import { useState, useEffect } from "react";

export default function GameTikusWhacAMole() {
  const [showModal, setShowModal] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [mice, setMice] = useState([]); // array tikus aktif

  const lanes = 10; // jumlah kolom

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(30);
    setMice([]);
  };

  // timer
  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0) setIsPlaying(false);
  }, [isPlaying, timeLeft]);

  // spawn tikus
  useEffect(() => {
    if (!isPlaying) return;

    const spawn = setInterval(() => {
      const lane = Math.floor(Math.random() * lanes);
      const id = Date.now() + Math.random();

      setMice((prev) => {
        if (prev.some((m) => m.lane === lane)) return prev;
        return [...prev, { id, lane, hit: false }];
      });

      // hilangkan tikus setelah animasi naik-turun selesai (0.4 + 0.6 detik)
      setTimeout(() => {
        setMice((prev) => prev.filter((m) => m.id !== id));
      }, 1000);
    }, 600); // interval spawn
    return () => clearInterval(spawn);
  }, [isPlaying]);

  const hitMice = (id) => {
    setScore((s) => s + 1);
    setMice((prev) => prev.map((m) => (m.id === id ? { ...m, hit: true } : m)));

    // hapus bekas tikus setelah 0.3 detik
    setTimeout(() => {
      setMice((prev) => prev.filter((m) => m.id !== id));
    }, 300);
  };

  return (
    <div className="game-tikus-container">
      <h4>Whac-A-Mole Tikus Edition!</h4>

      {!isPlaying && (
        <button onClick={() => setShowModal(true)} className="start-btn">
          Mainkan Game 🐁💼
        </button>
      )}
      {showModal && (
        <div
          className="modal-tikus"
          onClick={() => setShowModal(false)} // klik overlay → close modal
        >
          <div
            className="modal-tikus-inner"
            onClick={(e) => e.stopPropagation()} // klik di dalam modal → jangan close
          >
            <h3>Masukkan Nama</h3>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Nama kamu"
            />
            <button
              onClick={() => {
                if (playerName.trim()) {
                  setShowModal(false);
                  startGame();
                }
              }}
            >
              Mulai
            </button>
          </div>
        </div>
      )}

      {isPlaying && (
        <div className="container-game">
          <p>
            Pemain: <b>{playerName}</b> | Skor: <b>{score}</b> | Waktu tersisa:{" "}
            <b>{timeLeft}</b>
          </p>

          <div className="play-area-whac">
            {[...Array(lanes)].map((_, laneIndex) => (
              <div key={laneIndex} className="lane">
                {mice
                  .filter((m) => m.lane === laneIndex)
                  .map((m) => (
                    <div
                      key={m.id}
                      className={`mouse ${m.hit ? "hit" : ""}`}
                      onClick={() => hitMice(m.id)}
                    >
                      <img src="../../../public/img/tikus.png" alt="tikus" />
                      {m.hit && <div className="hit-overlay"></div>}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
