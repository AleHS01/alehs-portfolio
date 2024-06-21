import React, { useEffect, useState } from "react";
import styles from "../css/ThemeSwircher.module.css";
// import { PaintBrushIcon } from "@heroicons/react/16/solid";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeSwitcher = () => {
  const defaultLight = window.matchMedia("prefers-color-scheme: light").matches;
  const [theme, setTheme] = useLocalStorage(
    "porfolio.theme",
    defaultLight ? "light" : "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);
  return (
    <div
    // className={styles.div
    >
      <select name="" id="" onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="jungle">Jungle</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
