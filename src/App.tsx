import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Projects, Contact } from "./views";
import useLocalStorage from "./hooks/useLocalStorage";
import SocialIcons from "./components/Home/SocialIcons";
import Preloader from "./views/Preloader";

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
    setTimeout(() => setLoading(false), 4000);
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="app">
      <SocialIcons />
      <NavBar theme={theme} setTheme={setTheme} />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home theme={theme} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
