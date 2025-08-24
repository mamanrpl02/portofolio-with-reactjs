import "../styles/about.css";
import "../styles/global.css";
import "../styles/navbar.css";
import Navbar from "../components/Navbar";
import AboutIntro from "../components/About/AboutIntro";
import Education from "../components/About/Education";
import Experience from "../components/About/Experience";
import Skills from "../components/About/Skills";
import SoftSkills from "../components/About/SoftSkills";
import BuyMe from "../components/BuyMe";
import { useEffect } from "react";
import Footer from "../components/Footer";

export default function About() {
  useEffect(() => {
    document.title = "About - Web Portofolio Manz";
  }, []);

  return (
    <>
      <Navbar />
      <AboutIntro />
      <section id="details-about">
        <div className="detail-container pt-3rm">
          <Education />
          <Experience />
          <Skills />
          <SoftSkills />
        </div>
      </section>
      <Footer/>
      <BuyMe />
    </>
  );
}
