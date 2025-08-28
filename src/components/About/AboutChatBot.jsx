import { useState, useEffect, useRef } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Halo! Aku asisten Mamman 👋. Mau tanya apa tentang Mamman?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll ke bawah otomatis
  const scrollToBottom = (behavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => scrollToBottom(), [messages, isTyping]);

  // Scroll saat buka chat
  useEffect(() => {
    if (isOpen) setTimeout(() => scrollToBottom("auto"), 100);
  }, [isOpen]);

  // 🔹 FAQ dengan synonyms
  const faq = {
    nama: {
      synonyms: ["nama", "nama kamu siapa", "siapa nama", "nama lengkap"],
      answer: "Namaku Abdurrahman, tapi biasanya dipanggil Mamman 👋",
    },
    panggilan: {
      synonyms: ["panggilan", "nama panggilan", "dipanggil apa"],
      answer: "Orang-orang biasanya manggil aku Mamman ✨",
    },
    asal: {
      synonyms: ["asal", "asal kamu dari mana", "kampung halaman"],
      answer: "Aku berasal dari Pusakanagara, Subang – Jawa Barat 🏡",
    },
    sekolah: {
      synonyms: ["sekolah", "sekolah di mana", "nama sekolah"],
      answer: "Aku lulusan dari SMKN 1 Pusakanagara 🎓",
    },
    jurusan: {
      synonyms: ["jurusan", "jurusan apa", "program studi"],
      answer: "Aku ambil jurusan RPL (Rekayasa Perangkat Lunak) 💻",
    },
  };

  // 🔹 Cari jawaban terbaik
  const findBestAnswer = (userText) => {
    const text = userText.toLowerCase().trim();
    let matchedIntents = [];

    for (let intent in faq) {
      for (let synonym of faq[intent].synonyms) {
        if (text.includes(synonym)) {
          matchedIntents.push(intent);
          break;
        }
      }
    }

    if (matchedIntents.length === 1) {
      return { type: "answer", answer: faq[matchedIntents[0]].answer };
    }

    if (matchedIntents.length > 1) {
      const sugest = matchedIntents.map((intent) => faq[intent].synonyms[0]);
      return { type: "suggestion", sugest };
    }

    return { type: "fallback" };
  };

  // 🔹 Kirim pesan
  const sendMessage = (customText = null) => {
    const textToSend = customText || input;
    if (!textToSend.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: textToSend }]);
    setInput("");
    setIsTyping(true);

    setTimeout(async () => {
      setIsTyping(false);
      const result = findBestAnswer(textToSend);

      if (result.type === "answer") {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: result.answer },
        ]);
      } else if (result.type === "suggestion") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: (
              <div>
                Maksudmu salah satu ini? 🤔 <br />
                {result.sugest.map((s, i) => (
                  <button
                    key={i}
                    className="sugest-btn"
                    onClick={() => sendMessage(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            ),
          },
        ]);
      } else if (result.type === "fallback") {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Hmm... aku belum paham pertanyaanmu 🤔" },
        ]);

        // 🔹 Kirim ke spreadsheet
        try {
          await fetch(
            "https://script.google.com/macros/s/AKfycbz1rt_66wzyrl_EONdiN4F42Y0hXmFygBTvwZ9DqcZp8UwjRv7ncqYY6NePVkJjtp639g/exec",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              mode: "no-cors",
              body: JSON.stringify({ question: textToSend }),
            }
          );
          console.log("Pertanyaan tersimpan di spreadsheet!");
        } catch (err) {
          console.error("Gagal kirim ke spreadsheet:", err);
        }
      }
    }, 800);
  };

  // ✨ Tutup chat
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 300);
  };

  return (
    <div>
      <button className="chatbot-button" onClick={() => setIsOpen(true)}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-overlay" onClick={handleClose}>
          <div
            className={`chatbot-container ${isClosing ? "closing" : "open"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="chatbot-header">
              <span>🤖 Chat dengan Maman</span>
              <button className="close-btn" onClick={handleClose}>
                ✖
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}

              {isTyping && (
                <div className="typing-indicator">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tulis pesan..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={() => sendMessage()}>Kirim</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
