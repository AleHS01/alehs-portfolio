import React, { useEffect, useState, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import "../css/ThemeSwitcher.css";
import {
  IconMoon,
  IconMoonFilled,
  IconSun,
  IconSunFilled,
  IconPlant2,
} from "@tabler/icons-react";

const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const defaultLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [theme, setTheme] = useLocalStorage<string>(
    "portfolio.theme",
    defaultLight ? "light" : "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  const handleTheme = (t: string) => {
    setTheme(t.toLowerCase());
    setIsOpen(false); // Close the dropdown after selecting a theme
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const themesOptions: string[] = ["light", "dark", "jungle"];
  const filteredThemes = themesOptions.filter((t) => t !== theme);

  return (
    <div ref={menuRef}>
      <button
        className="theme-toggle border"
        onClick={() => setIsOpen(!isOpen)}
      >
        {theme === "light" ? (
          <IconSunFilled />
        ) : theme === "dark" ? (
          <IconMoonFilled />
        ) : (
          <IconPlant2 />
        )}
      </button>
      {isOpen && (
        <div className="theme-options border">
          {filteredThemes.map((t, index) => (
            <div key={index} onClick={() => handleTheme(t)} className="option">
              {t === "light" ? (
                <IconSun />
              ) : t === "dark" ? (
                <IconMoon />
              ) : (
                <IconPlant2 />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
