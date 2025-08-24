import "../styles/home.css";
import "../styles/global.css";
import "../styles/navbar.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import Projects from "../components/Home/Projects";
import ContactSection from "../components/Home/ContactSection";
import BuyMe from "../components/BuyMe";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "../context/LangContext";
import Footer from "../components/Footer";

export default function Home() {
  const location = useLocation();
  const { lang } = useLang(); // ambil bahasa

  useEffect(() => {
    if (location.state?.scrollTo === "contact") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // Teks AboutSection
  const aboutTexts = {
    en: {
      about1:
        "Learn more about my background and experiences as a Vocational High School graduate.",
      linkLabel1: "Get to Know Me...",
      about2:
        "Find me on social media to learn more about my activities, journey, and background.",
      linkLabel2: "Find Me",
    },
    id: {
      about1:
        "Pelajari lebih banyak tentang latar belakang dan pengalaman saya sebagai lulusan SMK.",
      linkLabel1: "Kenali Saya...",
      about2:
        "Temukan saya di media sosial untuk mempelajari lebih lanjut tentang aktivitas, perjalanan, dan latar belakang saya.",
      linkLabel2: "Temukan Saya",
    },
  };
  useEffect(() => {
    document.title = "Home - Web Portofolio Manz";
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection
        text={aboutTexts[lang].about1}
        link="/about"
        linkLabel={aboutTexts[lang].linkLabel1}
      />
      <Projects />
      <AboutSection
        text={aboutTexts[lang].about2}
        link="/social-media"
        linkLabel={aboutTexts[lang].linkLabel2}
      />
      <ContactSection />
      <Footer />

      <BuyMe />
    </>
  );
}
