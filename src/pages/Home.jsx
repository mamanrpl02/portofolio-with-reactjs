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

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "contact") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Projects />
      <ContactSection />
      <BuyMe />
    </>
  );
}
