import "../styles/home.css"; // import CSS khusus page Home
import Navbar from "../components/Navbar"; 
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import Projects from "../components/Home/Projects";
import ContactSection from "../components/Home/ContactSection";
import BuyMe from "../components/BuyMe";

export default function Home() {
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
