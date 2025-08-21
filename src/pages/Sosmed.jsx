import "../styles/sosmed.css";
import "../styles/global.css";
import "../styles/navbar.css";
import Navbar from "../components/Navbar";
import BuyMe from "../components/BuyMe";
import SocialMedia from "../components/Sosmed/SocialMedia";

export default function Sosmed() {
  return (
    <>
      <Navbar />
      <SocialMedia />
      <BuyMe />
    </>
  );
}
