import { useState, useEffect } from "react";

const positions = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // 3x3 lubang

export default function CatchMeFull() {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [lastIndex, setLastIndex] = useState(null); // jejak merah gagal
  const [clickedIndex, setClickedIndex] = useState(null); // jejak merah klik
  const [isPlaying, setIsPlaying] = useState(false); // kontrol game
  const [playerName, setPlayerName] = useState(""); // nama pemain
  const [showModal, setShowModal] = useState(false); // modal input nama
  const [timeLeft, setTimeLeft] = useState(30); // waktu permainan
  const [showResult, setShowResult] = useState(false); // modal hasil

  // Timer
  useEffect(() => {
    if (!isPlaying) return;

    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsPlaying(false);
      setShowResult(true); // waktu habis tampil modal hasil
    }
  }, [isPlaying, timeLeft]);

  // Munculkan tikus random
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const randomIndex =
        positions[Math.floor(Math.random() * positions.length)];
      setCurrentIndex(randomIndex);
      setLastIndex(null);

      setTimeout(() => {
        setCurrentIndex(null);
        setLastIndex(randomIndex);
      }, 1200);
    }, 1500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Kirim ke Google Spreadsheet saat game selesai
  useEffect(() => {
    if (showResult) {
      fetch(
        "https://script.google.com/macros/s/AKfycbx12345AbCdEfGhIjKlMnOpQrStUvWxYz/exec", // 👉 Ganti URL ini
        {
          method: "POST",
          body: JSON.stringify({
            name: playerName,
            score: score,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => console.log("✅ Data terkirim:", data))
        .catch((err) => console.error("❌ Gagal kirim:", err));
    }
  }, [showResult]);

  const handleClick = () => {
    setScore((prev) => prev + 1);
    setClickedIndex(currentIndex);
    setCurrentIndex(null);

    setTimeout(() => setClickedIndex(null), 500);
  };

  const handleStartGame = () => {
    if (playerName.trim() === "") return alert("Masukkan nama dulu!");
    setShowModal(false);
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(30);
  };

  const handleRestart = () => {
    setShowResult(false);
    setShowModal(true);
  };

  const handleBack = () => {
    setShowResult(false);
    setPlayerName("");
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(false);
    setShowModal(false);
  };

  return (
    <div className="catchme-container">
      <h1>Catch Me If You Can!</h1>

      {!isPlaying && !showResult && (
        <button className="start-btn" onClick={() => setShowModal(true)}>
          Mainkan Game
        </button>
      )}

      {/* Modal Input Nama */}
      {showModal && (
        <div className="game-modal-overlay">
          <div className="game-modal">
            <h2>Masukkan Nama Kamu</h2>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Nama pemain..."
            />
            <button className="play-btn" onClick={handleStartGame}>
              Mulai
            </button>
          </div>
        </div>
      )}

      {/* Game Area */}
      {isPlaying && (
        <div className="game-area fade-in">
          <p>
            Pemain: <b>{playerName}</b>
          </p>
          <p>Score: {score}</p>
          <p>Waktu: {timeLeft} detik</p>

          <div className="board">
            {positions.map((pos, i) => (
              <div
                key={i}
                className={`hole 
                  ${lastIndex === i ? "red-trail" : ""} 
                  ${clickedIndex === i ? "red-click" : ""}`}
              >
                {currentIndex === i && (
                  <div className="target mole-anim" onClick={handleClick}>
                    <img src="/img/tikus.png" alt="tikus" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal Hasil */}
      {showResult && (
        <div className="game-modal-overlay">
          <div className="game-modal">
            <h2>🎉 Waktu Habis!</h2>
            <p>
              Pemain: <b>{playerName}</b>
            </p>
            <p>
              Skor Akhir: <b>{score}</b>
            </p>
            <button className="play-btn" onClick={handleRestart}>
              Main Lagi
            </button>
            <button className="play-btn" onClick={handleBack}>
              Kembali
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
