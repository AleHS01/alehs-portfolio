import {
  useEffect,
  useState,
  useRef,
  FC,
  Dispatch,
  SetStateAction,
} from "react";
import "../css/ThemeSwitcher.css";
import {
  IconMoon,
  IconMoonFilled,
  IconSun,
  IconSunFilled,
  IconPlant2,
} from "@tabler/icons-react";
import Tooltip from "./Tooltip";
type ThemeProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};
const ThemeSwitcher: FC<ThemeProps> = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleTheme = (t: string) => {
    setIsOpen(false);
    setTheme(t.toLowerCase());

    localStorage.setItem("scrollPosition", window.scrollY.toString());

    location.reload();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const storedScroll = localStorage.getItem("scrollPosition");
    if (storedScroll) {
      window.scrollTo(0, parseInt(storedScroll, 10));
    }
  }, []);

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
                <Tooltip content="Light" bgColor="rgb(99, 142, 203)">
                  <IconSun />
                </Tooltip>
              ) : t === "dark" ? (
                <Tooltip content="Midnight" bgColor="rgb(0, 53, 84)">
                  <IconMoon />
                </Tooltip>
              ) : (
                <Tooltip content="Jungle" bgColor="rgb(31, 75, 44)">
                  <IconPlant2 />
                </Tooltip>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
