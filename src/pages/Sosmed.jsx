import "../styles/sosmed.css";
import "../styles/global.css";
import "../styles/navbar.css";
import Navbar from "../components/Navbar";
import BuyMe from "../components/BuyMe";
import SocialMedia from "../components/Sosmed/SocialMedia";
import { useEffect } from "react";
import Footer from "../components/Footer";

export default function Sosmed() {
  useEffect(() => {
    document.title = "Sosmed - Web Portofolio Manz";
  }, []);
  return (
    <>
      <Navbar />
      <SocialMedia />
      <Footer />

      <BuyMe />
    </>
  );
}
