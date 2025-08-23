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
      <AboutSection
        text="Learn more about my background and experiences as a Vocational High School graduate."
        link="/about"
        linkLabel="Get to Know Me..."
      />
      <Projects />
      <AboutSection
        text="Find me on social media to learn more about my activities, journey, and background."
        link="/social-media"
        linkLabel="Find Me"
      />
      <ContactSection />
      <BuyMe />
    </>
  );
}
