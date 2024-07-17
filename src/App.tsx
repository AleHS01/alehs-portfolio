import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Projects, Contact, Preloader } from "./views";
import useLocalStorage from "./hooks/useLocalStorage";
import SocialIcons from "./components/SocialIcons";
import { AnimatePresence } from "framer-motion";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const defaultLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [theme, setTheme] = useLocalStorage<string>(
    "portfolio.theme",
    defaultLight ? "light" : "dark"
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  if (loading) {
    return <Preloader theme={theme} />;
  }

  return (
    <div className="app">
      <SocialIcons />
      <NavBar theme={theme} setTheme={setTheme} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home theme={theme} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
