import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Sosmed from "./pages/Sosmed";
import Cursor from "./components/Cursor"; // import cursor
import { LangProvider } from "./context/LangContext"; // ✅


function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <LangProvider>
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/social-media" element={<Sosmed />} />
        </Routes>
      </LangProvider>
    </>
  );
}

export default App;
