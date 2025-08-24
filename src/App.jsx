import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Sosmed from "./pages/Sosmed";
import Cursor from "./components/Cursor";
import { LangProvider } from "./context/LangContext";
import NotFound from "./components/NotFound";

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
    <LangProvider>
      <Cursor />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/social-media" element={<Sosmed />} />
        {/* Route 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div id="overlay"></div>
    </LangProvider>
  );
}

export default App;
