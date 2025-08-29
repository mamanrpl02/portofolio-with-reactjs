import { useState, useEffect, useRef } from "react";
// Import data FAQ dari file terpisah
import { faq } from "../../data/faqChatBot";

export default function Chatbot() {
  // State untuk buka/tutup chat
  const [isOpen, setIsOpen] = useState(false);
  // State untuk animasi menutup chat
  const [isClosing, setIsClosing] = useState(false);
  // State untuk menyimpan semua pesan
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Halo! Aku asisten Mamman 👋. Mau tanya apa tentang Maman?",
    },
  ]);
  // State untuk input user
  const [input, setInput] = useState("");
  // State untuk menampilkan indikator bot mengetik
  const [isTyping, setIsTyping] = useState(false);
  // Ref untuk scroll otomatis ke bawah
  const messagesEndRef = useRef(null);

  // Fungsi scroll ke bawah chat
  const scrollToBottom = (behavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  // Scroll otomatis tiap ada pesan baru / bot mengetik
  useEffect(() => scrollToBottom(), [messages, isTyping]);

  // Scroll saat pertama kali buka chat
  useEffect(() => {
    if (isOpen) setTimeout(() => scrollToBottom("auto"), 100);
  }, [isOpen]);

  // 🔹 Fungsi cari jawaban terbaik dari user input
  const findBestAnswer = (userText) => {
    const text = userText.toLowerCase().trim();
    let matchedIntents = [];

    // Cek setiap intent di faq
    for (let intent in faq) {
      for (let synonym of faq[intent].synonyms) {
        if (text.includes(synonym)) {
          matchedIntents.push(intent);
          break; // cukup 1 match per intent
        }
      }
    }

    // 1 match → langsung jawab
    if (matchedIntents.length === 1) {
      return { type: "answer", answer: faq[matchedIntents[0]].answer };
    }

    // >1 match → kasih suggestion
    if (matchedIntents.length > 1) {
      const sugest = matchedIntents.map((intent) => faq[intent].synonyms[0]);
      return { type: "suggestion", sugest };
    }

    // 0 match → fallback
    return { type: "fallback" };
  };

  // 🔹 Fungsi kirim pesan
  const sendMessage = (customText = null) => {
    const textToSend = customText || input;
    if (!textToSend.trim()) return; // jika kosong, jangan kirim

    // Tambahkan pesan user ke chat
    setMessages((prev) => [...prev, { sender: "user", text: textToSend }]);
    setInput(""); // reset input
    setIsTyping(true); // tampilkan bot mengetik

    // Delay untuk simulasi bot mengetik
    setTimeout(async () => {
      setIsTyping(false); // stop typing
      const result = findBestAnswer(textToSend);

      // Jenis jawaban: answer
      if (result.type === "answer") {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: result.answer },
        ]);
      }
      // Jenis jawaban: suggestion
      else if (result.type === "suggestion") {
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
      }
      // Jenis jawaban: fallback
      else if (result.type === "fallback") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Hmmm… sepertinya aku belum di kasih jawaban untuk peertanyaan itu🤔... Tapi tenang, aku catat dulu ya biar kamu bisa cek nanti!",
          },
        ]);

        // 🔹 Kirim pertanyaan ke Google Sheets
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
          console.log("Pertanyaan tersimpan");
        } catch (err) {
          console.error("Gagal kirim", err);
        }
      }
    }, 800);
  };

  // 🔹 Fungsi tutup chat dengan animasi
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 300);
  };

  return (
    <div>
      {/* Tombol buka chat */}
      <button className="chatbot-button" onClick={() => setIsOpen(true)}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-overlay" onClick={handleClose}>
          <div
            className={`chatbot-container ${isClosing ? "closing" : "open"}`}
            onClick={(e) => e.stopPropagation()} // cegah click overlay menutup chat
          >
            {/* Header chat */}
            <div className="chatbot-header">
              <span>🤖 Chat dengan Maman</span>
              <button className="close-btn" onClick={handleClose}>
                ✖
              </button>
            </div>

            {/* Area pesan */}
            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              {/* Indikator bot mengetik */}
              {isTyping && (
                <div className="typing-indicator">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              )}
              <div ref={messagesEndRef} /> {/* scroll target */}
            </div>

            {/* Input user */}
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
