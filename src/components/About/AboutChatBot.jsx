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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // 🔹 FAQ dengan keyword dan jawaban
  const faq = [
    // Identitas dasar
    {
      q: [
        "nama kamu siapa",
        "siapa nama lengkap kamu",
        "nama lengkapmu apa",
        "boleh tahu nama lengkapmu",
        "sebutkan nama lengkapmu",
        "nama asli kamu siapa",
        "nama kamu lengkapnya apa",
        "siapa nama kamu",
        "nama lengkapmu siapa",
        "nama lengkap kamu tolong",
        "nama panjang kamu apa",
        "sebut nama kamu",
        "nama yang tercatat di ktp siapa",
        "nama resmi kamu apa",
        "nama kamu dong",
      ],
      a: "Namaku Abdurrahman, tapi biasanya dipanggil Mamman 👋",
    },
    {
      q: [
        "nama panggilan kamu apa",
        "biasanya dipanggil apa",
        "sapaan sehari-hari kamu apa",
        "nama pendek kamu apa",
        "temanmu manggil kamu apa",
        "dipanggil apa biasanya",
        "nama akrab kamu apa",
        "nama lain sehari-hari kamu apa",
        "orang tua panggil kamu apa",
        "panggilanmu sehari-hari apa",
        "julukan sehari-harimu apa",
        "kamu biasa disapa apa",
        "apa nama aliasmu sehari-hari",
        "teman-teman manggil kamu apa",
        "nama panggilannya siapa",
      ],
      a: "Orang-orang biasanya manggil aku Mamman ✨",
    },
    {
      q: [
        "asal kamu dari mana",
        "darimana asalmu",
        "kampung halamanmu di mana",
        "kamu lahir di mana",
        "kamu berasal dari kota mana",
        "asal daerah kamu mana",
        "aslinya kamu orang mana",
        "tempat asalmu mana",
        "kampungmu di mana",
        "kamu asalnya dari mana",
        "dari mana kamu berasal",
        "asal daerahmu dari mana",
        "kamu tinggal awalnya di mana",
        "asal kota kamu apa",
        "asal desa kamu apa",
      ],
      a: "Aku berasal dari Pusakanagara, Subang – Jawa Barat 🏡",
    },
    {
      q: [
        "tanggal lahirmu kapan",
        "kamu lahir tanggal berapa",
        "ulang tahunmu kapan",
        "hari lahirmu kapan",
        "lahirnya tanggal berapa",
        "lahir pada tanggal berapa",
        "kamu ultah tanggal berapa",
        "tanggal ultahmu kapan",
        "tanggal lahir resmi kamu kapan",
        "lahir di tanggal berapa",
        "hari ulang tahunmu kapan",
        "kapan kamu dilahirkan",
        "hari lahirmu apa",
        "tanggal kamu lahir kapan",
        "kapan ultahmu",
      ],
      a: "Aku lahir pada 19 Desember 2005 🎂",
    },
    {
      q: [
        "umur kamu berapa",
        "berapa usia kamu sekarang",
        "kamu sudah umur berapa",
        "kamu sekarang usia berapa",
        "berapa tahun umurmu",
        "sudah umur berapa kamu",
        "sekarang umur kamu berapa",
        "berapa tahun usiamu",
        "kamu sekarang umurnya berapa",
        "usia kamu sekarang berapa tahun",
        "berapa umur kamu saat ini",
        "berapa umurmu sekarang",
        "sekarang kamu umur berapa",
        "berapa usia kamu",
        "umurmu sekarang berapa",
      ],
      a: "Sekarang aku berusia 19 tahun 🙂",
    },

    // Pendidikan
    {
      q: [
        "sekolah di mana",
        "kamu sekolah di mana sekarang",
        "nama sekolahmu apa",
        "sekarang sekolah di mana",
        "kamu belajar di sekolah mana",
        "nama sekolah kamu sekarang apa",
        "sekolahmu namanya apa",
        "kamu sekolahnya di mana",
        "sekolah tempat kamu belajar apa",
        "kamu sekarang sekolah di mana",
        "sekolah apa yang kamu ikuti",
        "di sekolah mana kamu belajar",
        "sekolahmu di mana letaknya",
        "sekarang sekolah kamu di mana",
        "kamu terdaftar di sekolah mana",
      ],
      a: "Aku lulusan dari SMKN 1 Pusakanagara 🎓",
    },
    {
      q: [
        "kelas berapa sekarang",
        "kamu kelas berapa",
        "tingkatan kelasmu berapa",
        "kamu duduk di kelas berapa",
        "sekarang kelas kamu berapa",
        "kelas apa sekarang",
        "kamu sekarang ada di kelas berapa",
        "berapa kelas kamu sekarang",
        "tingkat sekolahmu apa",
        "kamu lagi kelas berapa",
        "kelas berapa kamu sekarang",
        "kamu sekolah di kelas berapa",
        "kamu masuk kelas berapa",
        "kelasmu sekarang berapa",
        "di tingkat berapa kamu sekarang",
      ],
      a: "Sekarang aku udah lulus sekolah 😁",
    },
    {
      q: [
        "jurusan kamu apa",
        "ambil jurusan apa di sekolah",
        "konsentrasi belajarmu apa",
        "jurusan yang kamu pilih apa",
        "jurusan sekolahmu apa",
        "kamu ambil jurusan apa",
        "jurusanmu sekarang apa",
        "kamu dari jurusan apa",
        "jurusan apa yang kamu tempuh",
        "jurusan apa yang kamu pilih",
        "jurusan apa yang kamu ambil",
        "program keahlianmu apa",
        "program studi kamu apa",
        "kamu belajar di jurusan apa",
        "jurusan sekolah kamu apa",
      ],
      a: "Aku ambil jurusan RPL (Rekayasa Perangkat Lunak) 💻",
    },

    // Minat & Hobi
    {
      q: [
        "hobi kamu apa",
        "kesukaanmu apa",
        "aktivitas favoritmu apa",
        "hobi yang kamu suka apa",
        "kamu suka ngapain",
        "aktivitas yang kamu gemari apa",
        "hal yang kamu senangi apa",
        "apa kegiatan favoritmu",
        "apa hobi yang kamu miliki",
        "hal yang sering kamu lakukan untuk senang apa",
        "hobi utamamu apa",
        "aktivitas yang kamu suka lakukan apa",
        "apa hobi kesukaanmu",
        "hal yang kamu senangi apa saja",
        "apa kegemaranmu",
      ],
      a: "Hobiku ngoding, ngulik teknologi, dan kadang main game 🎮",
    },
    {
      q: [
        "cita cita kamu apa",
        "ingin jadi apa nanti",
        "profesi impianmu apa",
        "cita-citamu apa",
        "apa mimpi masa depanmu",
        "kamu pengin jadi apa",
        "tujuan hidupmu apa",
        "apa yang kamu ingin capai",
        "cita cita kamu di masa depan apa",
        "ingin jadi orang apa nanti",
        "impian kamu apa",
        "apa profesi yang kamu inginkan",
        "kamu bercita-cita jadi apa",
        "apa pekerjaan impianmu",
        "apa yang kamu harapkan untuk masa depan",
      ],
      a: "Cita-citaku jadi Software Engineer dan bisa bikin produk bermanfaat 🚀",
    },
  ];

  // 🔹 Cari jawaban terbaik
  const findBestAnswer = (userText) => {
    const text = userText.toLowerCase().trim();

    // 1. Cari match full (jawaban langsung)
    for (let item of faq) {
      for (let keyword of item.q) {
        if (text === keyword.toLowerCase()) {
          return { score: 100, answer: item.a, sugest: [] };
        }
      }
    }

    // 2. Pecah pertanyaan user jadi kata
    const words = text.split(" ").filter((w) => w);

    // 3. Cari kecocokan per kategori faq
    let suggestionsByCategory = new Map();

    for (let item of faq) {
      for (let keyword of item.q) {
        const keywordWords = keyword.toLowerCase().split(" ");
        const common = words.filter((w) => keywordWords.includes(w));

        if (common.length >= 1) {
          // simpan hanya 1 sugesti per kategori (ambil keyword pertama yg match)
          if (!suggestionsByCategory.has(item.a)) {
            suggestionsByCategory.set(item.a, keyword);
          }
        }
      }
    }

    // 4. Hasilkan hanya 1 sugesti per kategori
    const suggestions = Array.from(suggestionsByCategory.values());

    if (suggestions.length > 0) {
      return {
        score: 0,
        answer: "",
        sugest: suggestions,
      };
    }

    // 5. Kalau tidak ada sama sekali → fallback
    return { score: 0, answer: "", sugest: [] };
  };

  const sendMessage = (customText = null) => {
    const textToSend = customText || input;
    if (!textToSend.trim()) return;

    const newMessage = { sender: "user", text: textToSend };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const bestMatch = findBestAnswer(textToSend);

      if (bestMatch.score > 0) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: bestMatch.answer },
        ]);
      } else if (bestMatch.sugest.length > 0) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: (
              <div>
                Maksudmu salah satu ini? 🤔 <br />
                {bestMatch.sugest.map((s, i) => (
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
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Hmm... aku belum paham pertanyaanmu 🤔",
          },
        ]);
      }
    }, 800);
  };

  // ✨ Fungsi close dengan animasi
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 300);
  };

  return (
    <div>
      {/* Tombol buka */}
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
