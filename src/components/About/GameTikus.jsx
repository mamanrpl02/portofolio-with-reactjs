import { useState, useEffect } from "react";

export default function GameTikusMarquee() {
  const [showModal, setShowModal] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [speed, setSpeed] = useState(5); // detik animasi
  const [mice, setMice] = useState([]);

  // start game
  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(30);
    setSpeed(5);
    setMice([]);
  };

  // timer
  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0) {
      setIsPlaying(false);
      console.log("Game selesai:", { name: playerName, score });
    }
  }, [isPlaying, timeLeft]);

  // spawn tikus
  useEffect(() => {
    if (!isPlaying) return;

    const spawn = setInterval(() => {
      const id = Date.now() + Math.random(); // id unik
      const lane = Math.floor(Math.random() * 3); // baris 0,1,2

      setMice((prev) => [...prev, { id, lane }]);

      // hapus otomatis setelah animasi selesai
      setTimeout(() => {
        setMice((prev) => prev.filter((m) => m.id !== id));
      }, speed * 1000);
    }, 200); // lebih cepat -> makin banyak tikus

    return () => clearInterval(spawn);
  }, [isPlaying, speed]);

  // percepat makin lama
  useEffect(() => {
    if (score > 0 && score % 5 === 0) {
      setSpeed((s) => Math.max(1, s - 0.5));
    }
  }, [score]);

  // klik tikus
  const hitMice = (id) => {
    setScore((s) => s + 1);
    setMice((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="game-tikus-container">
      <h4>Ada Game Nih Buat Kamuu...</h4>

      {!isPlaying && (
        <button onClick={() => setShowModal(true)} className="start-btn">
          Mainkan Game 🐁💼
        </button>
      )}

      {/* Modal input nama */}
      {showModal && (
        <div className="modal-tikus">
          <div className="modal-tikus-inner">
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
        <div>
          <p>
            Pemain: <b>{playerName}</b> | Skor: <b>{score}</b> <br />
            Matikan tikusnya dalam Waktu: <b>{timeLeft}</b>
          </p>

          <div className="play-area">
            {mice.map((m) => (
              <div
                key={m.id}
                className={`mouse lane-${m.lane}`}
                style={{ animationDuration: `${speed}s` }}
                onClick={() => hitMice(m.id)}
              >
              <img src="../../../public/img/tikus.png"></img> 
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
