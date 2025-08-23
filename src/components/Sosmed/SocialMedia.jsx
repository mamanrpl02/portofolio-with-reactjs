/* src/components/Sosmed/SocialMedia.jsx */
import SosmedItem from "./SosmedItem";
import { useLang } from "../../context/LangContext";

export default function SocialMedia() {
  const { lang } = useLang();

  const textEn = {
    title: "Find me on social media",
    infor: "Learn more about my activities, journey, and background in the :",
  };

  const textId = {
    title: "Temukan saya di media sosial  ",
    infor: "Pelajari lebih lanjut tentang aktivitas, perjalanan, dan latar belakang saya di:",
  };

  const text = lang === "en" ? textEn : textId;

  return (
    <section id="manzweb-sosmed" className="sosmed-section">
      <div className="sosmed-content">
        <div className="sosmed-title">
          <h2 className="c-white-1">{ text.title}</h2>
          <p>{ text.infor}</p>
        </div>

        <SosmedItem
          name="Linkedin"
          imgSrc="/logo/manzweb-linkedin.png"
          link="https://www.linkedin.com/in/abdurrahman-hidayat-581265293/"
        />
        <SosmedItem
          name="Instagram"
          imgSrc="/logo/manzweb-instagram.png"
          link="https://www.instagram.com/abdurrahman_730/"
        />
        <SosmedItem
          name="Tiktok"
          imgSrc="/logo/manzweb-tiktok.png"
          link="https://www.tiktok.com/@abdurrahman_730"
        />
        <SosmedItem
          name="Youtube"
          imgSrc="/logo/manzweb-youtube.png"
          link="https://www.youtube.com/@manzweb"
        />
      </div>
    </section>
  );
}
