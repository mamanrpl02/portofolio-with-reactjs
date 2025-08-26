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
        "Get to know my journey and experiences as a Vocational High School graduate.",
      linkLabel1: "About Me",
      about2: "Follow my journey on social media and see what I’m working on.",
      linkLabel2: "Follow Me",
    },
    id: {
      about1: "Kenali perjalanan dan pengalaman saya sebagai lulusan SMK.",
      linkLabel1: "Tentang Saya",
      about2:
        "Ikuti perjalanan saya di media sosial dan lihat apa yang sedang saya kerjakan.",
      linkLabel2: "Ikuti Saya",
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
